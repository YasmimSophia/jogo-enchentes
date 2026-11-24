import { perguntas } from "./perguntas.js";
import { aleatorio, nome } from "./aleatorio.js";

const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const tituloResultado = document.querySelector(".titulo-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const telaInicial = document.querySelector(".tela-inicial");
const jogo = document.querySelector(".jogo");
const botaoIniciar = document.querySelector(".iniciar-btn");
const inputNome = document.querySelector("#nome-jogador");
const erroNome = document.querySelector("#erro-nome");
const nomeUsuario = document.querySelector("#nome-usuario");
const botaoJogarNovamente = document.querySelector(".novamente-btn");
const botaoCreditos = document.querySelector(".creditos-btn");
const telaCreditos = document.querySelector(".tela-creditos");
const botaoVoltarInicio = document.querySelector(".voltar-inicio-btn");

let atual = 0;
let historiaFinal = "";
let nomeDaHistoria = nome;
let faseDaPartida = "inicio";

botaoIniciar.addEventListener("click", iniciaJogo);
botaoJogarNovamente.addEventListener("click", iniciaJogo);
botaoCreditos.addEventListener("click", mostraCreditos);
botaoVoltarInicio.addEventListener("click", voltaAoInicio);
inputNome.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        iniciaJogo();
    }
});
inputNome.addEventListener("input", () => erroNome.classList.add("oculto"));

function iniciaJogo() {
    const nomeDigitado = inputNome.value.trim();
    if (!nomeDigitado) {
        erroNome.classList.remove("oculto");
        inputNome.focus();
        return;
    }

    atual = 0;
    historiaFinal = "";
    nomeDaHistoria = nomeDigitado || nome;
    faseDaPartida = "jogando";
    nomeUsuario.textContent = nomeDigitado;
    erroNome.classList.add("oculto");

    telaInicial.classList.add("oculto");
    telaCreditos.classList.add("oculto");
    jogo.classList.remove("oculto");
    caixaResultado.classList.add("oculto");
    botaoJogarNovamente.classList.add("oculto");
    botaoCreditos.classList.add("oculto");
    textoResultado.textContent = "";
    caixaPerguntas.style.display = "block";
    caixaAlternativas.style.display = "flex";
    mostraPergunta();
}

function mostraPergunta() {
    const perguntaAtual = perguntas[atual];

    caixaResultado.classList.add("oculto");
    botaoJogarNovamente.classList.add("oculto");
    botaoCreditos.classList.add("oculto");

    if (perguntaAtual.final === "vitoria") {
        mostraVitoria(perguntaAtual.enunciado);
        return;
    }

    caixaPerguntas.textContent = perguntaAtual.enunciado.replace(/você/gi, nomeDaHistoria);
    caixaAlternativas.replaceChildren();

    for (const alternativa of perguntaAtual.alternativas) {
        const botao = document.createElement("button");
        botao.textContent = alternativa.texto;
        botao.disabled = alternativa.disponivel === false;
        botao.addEventListener("click", function () {
            respostaSelecionada(alternativa);
        });
        caixaAlternativas.appendChild(botao);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    if (faseDaPartida !== "jogando") {
        return;
    }

    if (opcaoSelecionada.disponivel === false) {
        return;
    }

    if (opcaoSelecionada.tipo === "gameover") {
        historiaFinal += aleatorio(opcaoSelecionada.afirmacao) + " ";
        mostraGameOver(opcaoSelecionada.mensagem);
        return;
    }

    const destino = opcaoSelecionada.proxima;
    if (!Number.isInteger(destino) || perguntas[destino] === undefined) {
        console.error("Destino inválido:", destino);
        return;
    }

    const origem = perguntas[atual];
    const chegada = perguntas[destino];
    const mudouDeCaminho = origem.caminho !== chegada.caminho;

    if (atual !== 0 && mudouDeCaminho && opcaoSelecionada.tipo !== "trocar") {
        console.error("Mudança de caminho sem o tipo trocar.");
        return;
    }

    if (opcaoSelecionada.tipo === "trocar" && !mudouDeCaminho) {
        console.error("A troca deve levar a outro caminho.");
        return;
    }

    const afirmacao = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacao + " ";
    atual = destino;
    mostraPergunta();
}

function mostraGameOver(mensagem) {
    faseDaPartida = "gameover";
    caixaPerguntas.style.display = "none";
    caixaAlternativas.replaceChildren();
    caixaAlternativas.style.display = "none";
    caixaResultado.classList.remove("oculto");
    tituloResultado.textContent = "GAME OVER";
    textoResultado.textContent = mensagem;
    botaoJogarNovamente.classList.remove("oculto");
    botaoCreditos.classList.add("oculto");
}

function mostraVitoria(mensagem) {
    if (faseDaPartida !== "jogando" || perguntas[atual].final !== "vitoria") {
        return;
    }

    faseDaPartida = "vitoria";
    caixaPerguntas.style.display = "none";
    caixaAlternativas.replaceChildren();
    caixaAlternativas.style.display = "none";
    caixaResultado.classList.remove("oculto");
    tituloResultado.textContent = "THE END";
    textoResultado.textContent = `${mensagem}\n\nSeu percurso nesta partida:\n${historiaFinal.trim()}`;
    botaoJogarNovamente.classList.add("oculto");
    botaoCreditos.classList.remove("oculto");
}

function mostraCreditos() {
    if (faseDaPartida !== "vitoria") {
        return;
    }

    faseDaPartida = "creditos";
    jogo.classList.add("oculto");
    telaCreditos.classList.remove("oculto");
}

function voltaAoInicio() {
    atual = 0;
    historiaFinal = "";
    faseDaPartida = "inicio";
    telaCreditos.classList.add("oculto");
    jogo.classList.add("oculto");
    telaInicial.classList.remove("oculto");
    inputNome.focus();
}

telaInicial.style.display = "flex";
caixaPerguntas.style.display = "none";
caixaAlternativas.style.display = "none";
caixaResultado.classList.add("oculto");
telaCreditos.classList.add("oculto");
