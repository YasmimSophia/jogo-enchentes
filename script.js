const telaInicial = document.querySelector(".tela-inicial");
const jogo = document.querySelector(".jogo");
const inputNome = document.querySelector("#nome-jogador");
const erroNome = document.querySelector("#erro-nome");
const botaoComecar = document.querySelector("#botao-comecar");
const nomeUsuario = document.querySelector("#nome-usuario");
const progresso = document.querySelector("#progresso");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const textoResultado = document.querySelector(".texto-resultado");
 
/*
  Tipos de alternativa:
  - afirmacao        -> escolha certa: segue para a próxima pergunta.
  - caminhoCorreto   -> escolha errada, mas o jogador se corrige e segue.
  - feedback         -> escolha errada: recebe uma dica e tenta de novo.
  - gameOver         -> escolha errada grave: a jornada termina.
*/
const perguntas = [
    {
        enunciado: "Você recebe um alerta da Defesa Civil no celular: chuva muito forte e risco de cheia no seu bairro. O que faz primeiro?",
        alternativas: [
            {
                texto: "Separo documentos, remédios, água e deixo o celular carregado, pronto para sair se for orientado.",
                afirmacao: "Ao receber o alerta da Defesa Civil, você separa documentos, remédios e água, mantém o celular carregado e se prepara para sair se for preciso."
            },
            {
                texto: "Continuo minha rotina e só decido o que fazer se a água chegar à minha rua.",
                caminhoCorreto: {
                    mensagem: "Você lembra que a água pode subir muito rápido e que o alerta existe justamente para dar tempo de agir. Decide se preparar agora, separando o que é essencial.",
                    afirmacao: "Você percebe que o alerta serve para dar tempo de agir e se prepara a tempo, separando o que é essencial."
                }
            },
            {
                texto: "Ignoro o alerta, porque nunca alagou onde eu moro.",
                feedback: "Lugares que nunca alagaram também podem ser atingidos por cheias maiores. Alertas oficiais devem ser levados a sério. Volte e escolha outra atitude."
            }
        ]
    },
    {
        enunciado: "A água já invadiu a rua e você precisa sair de casa. O que faz?",
        alternativas: [
            {
                texto: "Saio logo, sigo a rota indicada pelas equipes e evito qualquer trecho com água.",
                afirmacao: "Você sai de casa sem demora, segue a rota indicada pelas equipes e evita qualquer trecho com água."
            },
            {
                texto: "Volto para buscar a televisão e outros objetos de valor antes de sair.",
                feedback: "Bens materiais podem ser repostos, uma vida não. Cada minuto a mais pode fechar o caminho de saída. Volte e escolha outra atitude."
            },
            {
                texto: "Atravesso a rua alagada a pé, porque a água parece rasa.",
                gameOver: "A água parecia rasa, mas a correnteza escondia buracos e era mais forte do que você imaginava. Você foi arrastado e precisou ser resgatado. Água em movimento pode derrubar um adulto mesmo quando parece rasa. Nunca atravesse áreas alagadas."
            }
        ]
    },
    {
        enunciado: "Já em segurança, você vê uma família em cima de um telhado pedindo ajuda. O que faz?",
        alternativas: [
            {
                texto: "Aviso os bombeiros (193) ou a Defesa Civil (199) e informo a localização exata.",
                afirmacao: "Ao ver a família no telhado, você liga para os bombeiros (193) ou para a Defesa Civil (199) e informa a localização exata."
            },
            {
                texto: "Improviso um barco e vou até lá sozinho para resgatá-los.",
                caminhoCorreto: {
                    mensagem: "Você percebe que um barco improvisado pode virar com a correnteza e colocar você e a família em risco. Decide acionar quem tem preparo e equipamento.",
                    afirmacao: "Você percebe o risco de um resgate improvisado e aciona quem tem preparo e equipamento, informando onde a família está."
                }
            },
            {
                texto: "Presumo que alguém já avisou e sigo meu caminho.",
                feedback: "Muita gente pensa a mesma coisa e, no fim, ninguém liga. Um aviso a mais pode salvar vidas. Volte e escolha outra atitude."
            }
        ]
    },
    {
        enunciado: "No abrigo, circula uma mensagem dizendo que uma barragem rompeu, mas ninguém sabe a fonte. O que faz?",
        alternativas: [
            {
                texto: "Não repasso, confirmo com a Defesa Civil ou canais oficiais e aviso a coordenação do abrigo.",
                afirmacao: "No abrigo, você não repassa a mensagem sem fonte, confirma a informação com canais oficiais e avisa a coordenação."
            },
            {
                texto: "Repasso para todos os grupos, para avisar o máximo de gente.",
                caminhoCorreto: {
                    mensagem: "Você pensa no pânico que um boato pode causar e nas equipes ocupadas com alarmes falsos. Decide apagar o encaminhamento e checar a informação nos canais oficiais.",
                    afirmacao: "Você percebe o estrago que um boato pode causar, interrompe o compartilhamento e confere tudo em canais oficiais."
                }
            },
            {
                texto: "Grito no abrigo para todos fugirem imediatamente.",
                feedback: "Sem confirmação, gritar pode causar tumulto e machucar pessoas, principalmente crianças e idosos. Volte e escolha outra atitude."
            }
        ]
    },
    {
        enunciado: "A água baixou, mas a torneira está turva e você está com sede. O que faz?",
        alternativas: [
            {
                texto: "Bebo só água mineral ou a distribuída pelas equipes, ou trato a água conforme a orientação oficial.",
                afirmacao: "Você bebe apenas água de fonte confiável ou tratada conforme a orientação oficial, e descarta alimentos que tiveram contato com a água da enchente."
            },
            {
                texto: "Bebo a água da torneira mesmo turva, porque sai da rede de abastecimento.",
                caminhoCorreto: {
                    mensagem: "Você lembra que, depois de uma enchente, a rede pode estar contaminada. Decide procurar água mineral ou a distribuída pelas equipes e seguir as orientações de tratamento.",
                    afirmacao: "Você lembra que a rede pode estar contaminada depois da enchente e procura água segura, seguindo as orientações de tratamento."
                }
            },
            {
                texto: "Bebo a água da enchente acumulada no quintal, porque ela parece limpa.",
                gameOver: "A água de enchente carrega esgoto, lixo e bactérias, mesmo quando parece limpa. Você passa mal e precisa de atendimento médico urgente."
            }
        ]
    },
    {
        enunciado: "A comunidade começa a se reorganizar e você quer voltar para casa e iniciar a limpeza. Como faz?",
        alternativas: [
            {
                texto: "Espero a liberação da Defesa Civil, uso botas e luvas e só religo a energia depois de uma avaliação segura.",
                afirmacao: "Você espera a liberação da Defesa Civil, usa botas e luvas e só religa a energia depois de uma avaliação segura, ajudando a comunidade a se reerguer com cuidado."
            },
            {
                texto: "Volto imediatamente para casa, sem esperar nenhuma liberação.",
                feedback: "A casa pode ter a estrutura abalada ou ainda oferecer riscos. Aguarde a liberação das autoridades e escolha outra atitude."
            },
            {
                texto: "Entro na casa ainda molhada e religo a energia para ver o que funciona.",
                gameOver: "Fios e tomadas molhados podem causar choque elétrico. Você leva um choque e precisa ser socorrido. Após uma enchente, a energia só deve ser religada depois da avaliação de um profissional."
            }
        ]
    }
];
 
let atual = 0;
let perguntaAtual;
let historiaFinal = "";
let nomeJogador = "";
 
function embaralhar(lista) {
    const copia = [...lista];
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
}
 
function iniciaJogo() {
    const nome = inputNome.value.trim();
    if (!nome) {
        erroNome.classList.remove("oculto");
        inputNome.focus();
        return;
    }
    erroNome.classList.add("oculto");
    nomeJogador = nome;
    nomeUsuario.textContent = nomeJogador;
    telaInicial.classList.add("oculto");
    jogo.classList.remove("oculto");
    reiniciarJogo();
}
 
function reiniciarJogo() {
    atual = 0;
    historiaFinal = "";
    mostraPergunta();
}
 
function voltaAoInicio() {
    jogo.classList.add("oculto");
    telaInicial.classList.remove("oculto");
    inputNome.value = nomeJogador;
    inputNome.focus();
}
 
function limpaTela() {
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    textoResultado.classList.remove("game-over");
}
 
function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    limpaTela();
    progresso.textContent = `Pergunta ${atual + 1} de ${perguntas.length}`;
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
 
function mostraAlternativas() {
    for (const alternativa of embaralhar(perguntaAtual.alternativas)) {
        const botao = document.createElement("button");
        botao.textContent = alternativa.texto;
        botao.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botao);
    }
}
 
function respostaSelecionada(opcao) {
    if (opcao.gameOver) {
        mostraGameOver(opcao.gameOver);
        return;
    }
    if (opcao.caminhoCorreto) {
        mostraCaminhoCorreto(opcao.caminhoCorreto);
        return;
    }
    if (opcao.feedback) {
        mostraFeedback(opcao.feedback);
        return;
    }
    avancar(opcao.afirmacao);
}
 
function avancar(afirmacao) {
    historiaFinal += afirmacao + " ";
    atual++;
    mostraPergunta();
}
 
function criaBotao(texto, aoClicar, secundario = false) {
    const botao = document.createElement("button");
    botao.textContent = texto;
    if (secundario) botao.classList.add("secundario");
    botao.addEventListener("click", aoClicar);
    caixaAlternativas.appendChild(botao);
}
 
function mostraCaminhoCorreto(caminho) {
    limpaTela();
    textoResultado.textContent = caminho.mensagem;
    criaBotao("Seguir pelo caminho correto", () => avancar(caminho.afirmacao));
}
 
function mostraFeedback(mensagem) {
    limpaTela();
    textoResultado.textContent = mensagem;
    criaBotao("Voltar e escolher outra resposta", mostraPergunta);
}
 
function mostraGameOver(mensagem) {
    limpaTela();
    progresso.textContent = "";
    caixaPerguntas.textContent = "Game Over";
    textoResultado.textContent = mensagem;
    textoResultado.classList.add("game-over");
    criaBotoesFinais();
}
 
function mostraResultado() {
    limpaTela();
    progresso.textContent = "";
    caixaPerguntas.textContent = "Cada atitude segura pode fazer a diferença.";
    textoResultado.textContent = `Parabéns, ${nomeJogador}! ${historiaFinal.trim()}`;
    criaBotoesFinais();
}
 
function criaBotoesFinais() {
    criaBotao("Jogar novamente", reiniciarJogo);
    criaBotao("Voltar ao início", voltaAoInicio, true);
}
 
botaoComecar.addEventListener("click", iniciaJogo);
inputNome.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        iniciaJogo();
    }
});
inputNome.addEventListener("input", () => erroNome.classList.add("oculto"));