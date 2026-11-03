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
                feedback: "Você lembra que a água pode subir muito rápido e que o alerta existe justamente para dar tempo de agir. Revise a decisão e escolha outra atitude."
            },
            {
                texto: "Ignoro o alerta, porque nunca alagou onde eu moro.",
                gameOver: "Você ignora o alerta e, quando a água sobe rápido, a rua se transforma em um risco real. A enchente pode chegar mais depressa do que você imagina. Alertas oficiais devem ser respeitados para proteger sua vida."
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
                feedback: "O resgate improvisado é muito perigoso: a correnteza e a força da água podem virar o barco e colocar todos em risco. Volte e escolha outra atitude."
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
                feedback: "O boato espalha pânico e pode fazer pessoas sairem correndo sem necessidade, piorando a situação no abrigo. Informações não confirmadas devem ser evitadas. Volte e escolha outra atitude."
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
                feedback: "Você lembra que, depois de uma enchente, a rede pode estar contaminada. Procure água segura conforme a orientação oficial e escolha outra atitude."
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
                feedback: "Fios e tomadas molhados podem causar choque elétrico. A energia só deve voltar depois da avaliação segura. Volte e escolha outra atitude."
            }
        ]
    },
    {
        enunciado: "Você percebe que algumas pessoas estão sem lanternas e sem sinal de celular. O que faz?",
        alternativas: [
            {
                texto: "Ajudo a organizar uma lista de contatos de emergência e distribuo lanternas para quem precisa.",
                afirmacao: "Você organiza ajuda prática, divide lanternas e orienta as pessoas sobre contatos de emergência e pontos de apoio."
            },
            {
                texto: "Ignoro, porque a luz da rua deve bastar para todos.",
                feedback: "Sem luz suficiente, a movimentação fica perigosa e pessoas podem se perder. Volte e escolha outra atitude."
            },
            {
                texto: "Tento acender velas dentro de casa e não avisa ninguém.",
                gameOver: "Velas dentro de casa podem causar incêndio em ambientes com poeira, móveis úmidos e risco de fumaça. Em situação de enchente, a segurança deve vir primeiro."
            }
        ]
    },
    {
        enunciado: "Você encontra uma pessoa tentando carregar um aparelho elétrico em um ambiente molhado. O que faz?",
        alternativas: [
            {
                texto: "Pego o aparelho, desligo a tomada e oriento que não use energia em área úmida.",
                afirmacao: "Você evita um risco grave, desliga a energia e orienta que é perigoso usar aparelhos elétricos em ambiente úmido."
            },
            {
                texto: "Ajudou a pessoa a colocar o aparelho para carregar mesmo assim.",
                feedback: "Água e eletricidade juntos podem causar choque muito grave. Volte e escolha outra atitude."
            },
            {
                texto: "Coloco uma extensão para facilitar a tomada.",
                gameOver: "Tomadas e extensões em ambiente molhado podem provocar choque elétrico e incêndio. A segurança é prioridade."
            }
        ]
    },
    {
        enunciado: "Você ouve dizer que um supermercado está doando alimentos, mas ainda não tem confirmação oficial. O que faz?",
        alternativas: [
            {
                texto: "Confirma com a coordenação do abrigo e aguarda a orientação oficial antes de ir.",
                afirmacao: "Você confirma a informação com a coordenação do abrigo e só vai quando houver orientação correta para a distribuição."
            },
            {
                texto: "Vai imediatamente para o supermercado e fica na fila sem saber se é confiável.",
                feedback: "Sem confirmação oficial, você pode esperar em vão ou piorar o congestionamento. Volte e escolha outra atitude."
            },
            {
                texto: "Entra correndo para pegar tudo antes que acabe.",
                gameOver: "Lugares com aglomeração e pouca organização podem se tornar perigosos após enchentes. Ordem e confirmação são fundamentais."
            }
        ]
    },
    {
        enunciado: "Um idoso está muito cansado e não consegue acompanhar o grupo de evacuação. O que faz?",
        alternativas: [
            {
                texto: "Ajudo a pessoa a caminhar com calma, avisando a equipe e pedindo apoio se necessário.",
                afirmacao: "Você acompanha a pessoa com atenção, comunica a equipe e garante que o deslocamento fique seguro para todos."
            },
            {
                texto: "Pego o idoso no colo para correr mais rápido.",
                feedback: "Isso pode causar queda, cansaço extremo e piorar a situação. Volte e escolha outra atitude."
            },
            {
                texto: "Deixo a pessoa para trás, porque o grupo precisa continuar.",
                gameOver: "Deixar alguém para trás em situação de risco pode colocar a vida da pessoa em perigo. A evacuação deve considerar todo mundo."
            }
        ]
    },
    {
        enunciado: "Uma pessoa pede para você guardar remédios em um lugar úmido e sem proteção. O que faz?",
        alternativas: [
            {
                texto: "Guardo os remédios em local seco, protegido e organizado, conforme a orientação do abrigo.",
                afirmacao: "Você guarda os remédios em local seco e seguro, protegendo medicamentos e evitando desperdício ou riscos de uso."
            },
            {
                texto: "Coloco os remédios em qualquer lugar para economizar espaço.",
                feedback: "Remédios mal guardados podem estragar e deixar pessoas sem tratamento. Volte e escolha outra atitude."
            },
            {
                texto: "Jogo os remédios fora porque estão em caixas danificadas.",
                gameOver: "Medicamentos podem ser essenciais para muitas pessoas. Não jogue fora sem orientação e sem checar o que pode ser usado com segurança."
            }
        ]
    },
    {
        enunciado: "Você está no abrigo e uma criança diz que sente medo e quer voltar para casa. O que faz?",
        alternativas: [
            {
                texto: "Escuto a criança, explico com calma o que está acontecendo e a levo para um responsável ou equipe de apoio.",
                afirmacao: "Você acolhe a criança, escuta suas preocupações e a ajuda a conversar com um responsável ou com a equipe de apoio."
            },
            {
                texto: "Digo que ela precisa parar de chorar e seguir em frente.",
                feedback: "A criança precisa de acolhimento e explicações claras. Volte e escolha outra atitude."
            },
            {
                texto: "Deixo a criança sozinha para resolver sozinha.",
                gameOver: "Uma criança em situação de risco precisa de atenção e acompanhamento. Deixar a criança sozinha pode agravar a ansiedade e a vulnerabilidade."
            }
        ]
    },
    {
        enunciado: "Você foi chamado para ajudar a separar doações, mas percebe que alguns itens estão em más condições. O que faz?",
        alternativas: [
            {
                texto: "Separo o que pode ser usado, ignoro o que está danificado e informo à equipe sobre o que foi descartado.",
                afirmacao: "Você separa os itens seguros, descarta o que está inutilizável e informa a equipe para evitar desperdício e riscos."
            },
            {
                texto: "Joga tudo em um mesmo saco para resolver rápido.",
                feedback: "Misturar itens danificados com os úteis pode causar desperdício e confusão. Volte e escolha outra atitude."
            },
            {
                texto: "Entrega tudo sem verificar, mesmo que esteja estragado.",
                gameOver: "Itens estragados podem comprometer a saúde e a distribuição correta. Verificação e organização são essenciais."
            }
        ]
    },
    {
        enunciado: "Você está no abrigo e nota que uma pessoa está tendo dificuldade para respirar por causa do pó e da poeira. O que faz?",
        alternativas: [
            {
                texto: "Levo a pessoa para um local ventilado e aviso a equipe de apoio para que ela receba atenção adequada.",
                afirmacao: "Você leva a pessoa para um local ventilado e avisa a equipe para receber atenção adequada, evitando agravamento do problema."
            },
            {
                texto: "Mandar a pessoa continuar trabalhando na mesma área.",
                feedback: "Poeira e esforço em ambiente ruim podem piorar a respiração. Volte e escolha outra atitude."
            },
            {
                texto: "Diz que a pessoa deve ignorar, porque é só poeira.",
                gameOver: "Dificuldade para respirar não pode ser ignorada. A poeira e a falta de ventilação podem agravar problemas respiratórios."
            }
        ]
    },
    {
        enunciado: "Você vê um carro parado com o motor ligado em uma área do abrigo onde há água acumulada. O que faz?",
        alternativas: [
            {
                texto: "Avisa a equipe e pede para que o veículo seja retirado de imediato por segurança.",
                afirmacao: "Você avisa a equipe e orienta a retirada do veículo, porque água e motor ligado podem ser muito perigosos."
            },
            {
                texto: "Deixa o carro ali, porque é só um detalhe.",
                feedback: "Água e motores ligados podem causar risco de choque, incêndio e acidentes. Volte e escolha outra atitude."
            },
            {
                texto: "Tenta empurrar o carro para dentro da água.",
                gameOver: "Tentar mover um carro em área alagada pode causar acidente e colocá-lo em risco. Segurança deve vir antes de qualquer tentativa improvisada."
            }
        ]
    },
    {
        enunciado: "Uma senhora diz que perdeu a documentação e não sabe como resolver. O que faz?",
        alternativas: [
            {
                texto: "Ajudo a procurar com cuidado, organizo os documentos que ainda podem ser úteis e oriento sobre os canais oficiais.",
                afirmacao: "Você ajuda a localizar documentos e orienta a pessoa sobre os canais certos para pedir ajuda e regularizar a situação."
            },
            {
                texto: "Digo que não tem como resolver e que ela deve esquecer.",
                feedback: "Não é verdade: existem canais e apoio que podem ajudar. Volte e escolha outra atitude."
            },
            {
                texto: "Joga tudo fora e pede para a pessoa começar do zero.",
                gameOver: "Documentos e registros podem ser muito importantes. Ignorar a situação sem orientação pode causar mais prejuízo."
            }
        ]
    },
    {
        enunciado: "Você precisa ajudar no apoio emocional de alguém que está em grande tensão. O que faz?",
        alternativas: [
            {
                texto: "Escuta com calma, acolhe e ajuda a pessoa a encontrar apoio de profissionais ou familiares.",
                afirmacao: "Você escuta com empatia, acolhe a pessoa e ajuda no apoio emocional, sem ignorar o sofrimento dela."
            },
            {
                texto: "Diz que ela precisa parar de se preocupar.",
                feedback: "Pessoas em situação de crise precisam de acolhimento e escuta, não de desvalorização. Volte e escolha outra atitude."
            },
            {
                texto: "Sai de perto e deixa a pessoa sozinha.",
                gameOver: "A pessoa pode ficar ainda mais desorientada e vulnerável. O acolhimento é uma medida de segurança emocional."
            }
        ]
    },
    {
        enunciado: "Você descobre que uma área de abrigo está muito estreita e com pouco espaço para circulação. O que faz?",
        alternativas: [
            {
                texto: "Ajuda a reorganizar os espaços, cria corredores e orienta as pessoas para manter a circulação segura.",
                afirmacao: "Você organiza o espaço, melhora a circulação e evita acidentes, ajudando a manter a segurança do abrigo."
            },
            {
                texto: "Deixa tudo como está, porque é difícil mudar.",
                feedback: "Espaços apertados podem aumentar o risco de acidentes. Volte e escolha outra atitude."
            },
            {
                texto: "Empurra todo mundo para o mesmo lado sem pensar no espaço.",
                gameOver: "A aglomeração sem organização pode causar quedas e acidentes. A organização do espaço é essencial para a segurança."
            }
        ]
    },
    {
        enunciado: "Uma pessoa do abrigo quer usar uma bomba ou gerador em um local fechado. O que faz?",
        alternativas: [
            {
                texto: "Oriento que o equipamento seja usado ao ar livre, em local seguro e com supervisão, para evitar intoxicação por gás.",
                afirmacao: "Você orienta o uso do gerador ou da bomba em local ventilado e seguro, prevenindo riscos de intoxicação e incêndio."
            },
            {
                texto: "Permite usar dentro de casa para economizar tempo.",
                feedback: "Usar geradores ou bombas em locais fechados pode ser muito perigoso por causa da intoxicação por monóxido de carbono. Volte e escolha outra atitude."
            },
            {
                texto: "Deixa a pessoa usar sem orientação porque não é grande coisa.",
                gameOver: "Equipamentos de energia em locais inadequados podem causar intoxicação, incêndio e acidentes graves. A orientação correta salva vidas."
            }
        ]
    },
    {
        enunciado: "A fome está aumentando no abrigo e você precisa ajudar a organizar as refeições. O que faz?",
        alternativas: [
            {
                texto: "Distribui as refeições por ordem, evitando desperdício e respeitando as necessidades de cada pessoa.",
                afirmacao: "Você organiza a distribuição das refeições com cuidado, respeitando a ordem e evitando desperdício para atender a todos com segurança."
            },
            {
                texto: "Entrega tudo de uma vez para quem chegar primeiro.",
                feedback: "Essa prática pode gerar confusão, disputa e deixar muita gente sem alimento. Volte e escolha outra atitude."
            },
            {
                texto: "Joga as refeições no chão para todos pegarem ao mesmo tempo.",
                gameOver: "A distribuição caótica pode causar acidentes, empurra-empurra e desperdício. Organização e respeito são fundamentais em um abrigo."
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
    caixaPerguntas.textContent = "Você tomou uma decisão perigosa. A jornada termina aqui.";
    criaBotoesFinais();
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