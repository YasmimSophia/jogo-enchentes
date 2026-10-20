const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Durante as enchentes no Rio Grande do Sul, a água começa a subir perto da sua casa. O que você faz primeiro?",
        alternativas: [
            {
                texto: "Vou para um local alto e seguro e aviso os serviços de emergência, sem entrar na água.",
                afirmacao: "Você busca um local alto e seguro e avisa os serviços de emergência, sem se arriscar na água."
            },
            {
                texto: "Tento atravessar a área alagada para chegar mais rápido a outro lugar.",
                gameOver: "A correnteza e perigos escondidos tornam a travessia muito arriscada. Você precisará ser resgatado. Em uma enchente, não atravesse áreas alagadas."
            }
        ]
    },
    {
        enunciado: "Já em segurança, você vê uma família ilhada pedindo ajuda. Como pode contribuir?",
        alternativas: [
            {
                texto: "Informo a localização aos bombeiros ou à Defesa Civil e aguardo as equipes preparadas.",
                afirmacao: "Ao avistar uma família ilhada, você informa a localização aos bombeiros ou à Defesa Civil e aguarda uma equipe preparada para o resgate."
            },
            {
                texto: "Entro na água para tentar resgatá-la por conta própria.",
                gameOver: "A tentativa de resgate coloca você e a família em perigo. O resgate deve ser feito por equipes preparadas: avise os bombeiros ou a Defesa Civil."
            }
        ]
    },
    {
        enunciado: "No abrigo, uma pessoa está preocupada porque não consegue falar com parentes. O que você faz?",
        alternativas: [
            {
                texto: "Escuto com calma e ajudo a buscar informações por canais oficiais.",
                afirmacao: "No abrigo, você escuta essa pessoa com atenção e ajuda a procurar notícias por canais oficiais, sem compartilhar informações não confirmadas."
            },
            {
                texto: "Compartilho nas redes qualquer notícia que encontrar para tentar ajudar.",
                feedback: "Antes de compartilhar, confirme a informação em canais oficiais. Notícias falsas podem atrapalhar o resgate. Tente escolher outra atitude."
            }
        ]
    },
    {
        enunciado: "As equipes pedem apoio para organizar doações. Qual atitude ajuda mais?",
        alternativas: [
            {
                texto: "Pergunto ao abrigo quais itens são necessários e ajudo a separar e distribuir as doações.",
                afirmacao: "Você pergunta ao abrigo quais itens são necessários e ajuda a organizar as doações com cuidado e respeito."
            },
            {
                texto: "Levo qualquer tipo de doação, sem verificar o que está sendo pedido.",
                feedback: "Doações que não são necessárias podem sobrecarregar o abrigo. Pergunte quais itens estão sendo solicitados e tente novamente."
            }
        ]
    },
    {
        enunciado: "Depois que a água baixa, a comunidade começa a se reorganizar. Como você continua ajudando?",
        alternativas: [
            {
                texto: "Sigo as orientações das autoridades e participo de ações comunitárias seguras.",
                afirmacao: "Quando a água baixa, você segue as orientações das autoridades e participa de ações comunitárias seguras para apoiar a recuperação."
            },
            {
                texto: "Volto imediatamente para casa, mesmo sem saber se o local está seguro.",
                feedback: "A casa pode estar danificada ou ainda oferecer riscos. Aguarde a liberação das autoridades antes de voltar e tente escolher outra atitude."
            }
        ]
    },
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    if(opcaoSelecionada.gameOver){
        mostraGameOver(opcaoSelecionada.gameOver);
        return;
    }

    if(opcaoSelecionada.feedback){
        mostraFeedback(opcaoSelecionada.feedback);
        return;
    }

    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraFeedback(mensagem){
    textoResultado.textContent = mensagem;
    caixaAlternativas.textContent = "";

    const botaoTentarNovamente = document.createElement("button");
    botaoTentarNovamente.textContent = "Voltar e escolher outra resposta";
    botaoTentarNovamente.addEventListener("click", mostraPergunta);
    caixaAlternativas.appendChild(botaoTentarNovamente);
}

function mostraGameOver(mensagem){
    caixaPerguntas.textContent = "Game Over";
    textoResultado.textContent = mensagem;
    caixaAlternativas.textContent = "";
    mostraBotaoReiniciar();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Cada atitude segura pode fazer a diferença.";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    mostraBotaoReiniciar();
}

function mostraBotaoReiniciar(){
    const botaoReiniciar = document.createElement("button");
    botaoReiniciar.textContent = "Jogar novamente";
    botaoReiniciar.addEventListener("click", reiniciarJogo);
    caixaAlternativas.appendChild(botaoReiniciar);
}

function reiniciarJogo(){
    atual = 0;
    historiaFinal = "";
    textoResultado.textContent = "";
    mostraPergunta();
}

mostraPergunta();