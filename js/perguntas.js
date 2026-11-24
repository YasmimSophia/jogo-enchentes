// Perguntas das duas narrativas sobre prevenção e resposta a enchentes.
export const perguntas = [
    { // 0 — pergunta inicial
        caminho: "inicio",
        enunciado:
            "A previsão indica chuva intensa e a Defesa Civil emite um alerta para a sua região. " +
            "O que você faz primeiro?",
        alternativas: [
            {
                texto: "Separo documentos, remédios e água e acompanho os avisos oficiais.",
                afirmacao: ["Separou itens essenciais e passou a acompanhar os avisos oficiais."],
                tipo: "entrada",
                proxima: 1
            },
            {
                texto: "Procuro saber como ajudar a comunidade a se preparar.",
                afirmacao: ["Decidiu ajudar a comunidade a se preparar para a chuva."],
                tipo: "entrada",
                proxima: 2
            }
        ]
    },
    { // 1 — A1: preparar a escola
        caminho: "A",
        enunciado:
            "Na escola, a turma vai preparar uma proposta de prevenção para dias de chuva forte. " +
            "Como você começa?",
        alternativas: [
            {
                texto: "Consultar orientações da Defesa Civil e conferir como se preparar.",
                afirmacao: ["Consultou orientações oficiais para se preparar para as enchentes."],
                tipo: "avancar",
                proxima: 3
            },
            {
                texto: "Usar o material de prevenção já revisado pela escola.",
                afirmacao: ["Escolheu o material de prevenção revisado pela escola."],
                tipo: "salto",
                proxima: 4
            },
            {
                texto: "Ajudar a comunidade a verificar um aviso de alagamento recebido no bairro.",
                afirmacao: ["Decidiu ajudar a comunidade a verificar um aviso de alagamento."],
                tipo: "trocar",
                proxima: 2,
                disponivel: true
            }
        ]
    },
    { // 2 — B1: investigar um aviso
        caminho: "B",
        enunciado:
            "No bairro, chega uma mensagem dizendo que uma área será alagada, mas ela não informa a fonte. " +
            "O que você faz?",
        alternativas: [
            {
                texto: "Conferir o aviso nos canais oficiais antes de compartilhá-lo.",
                afirmacao: ["Conferiu a origem do aviso antes de compartilhá-lo."],
                tipo: "avancar",
                proxima: 7
            },
            {
                texto: "Entrar em contato com a Defesa Civil para confirmar a informação.",
                afirmacao: ["Procurou a Defesa Civil para confirmar a informação."],
                tipo: "salto",
                proxima: 8
            },
            {
                texto: "Levar o caso para a proposta de prevenção da escola.",
                afirmacao: ["Levou o caso do aviso para a proposta da escola."],
                tipo: "trocar",
                proxima: 1,
                disponivel: true
            }
        ]
    },
    { // 3 — A2: conferir orientações
        caminho: "A",
        enunciado:
            "Você encontra uma orientação sobre enchentes sem indicação de fonte. " +
            "Como verifica se ela é confiável?",
        alternativas: [
            {
                texto: "Comparar a informação com os canais oficiais da Defesa Civil.",
                afirmacao: ["Conferiu a orientação nos canais oficiais da Defesa Civil."],
                tipo: "avancar",
                proxima: 4
            },
            {
                texto: "Retomar o planejamento e listar o que ainda precisa confirmar.",
                afirmacao: ["Retomou o planejamento e anotou o que precisava confirmar."],
                tipo: "salto",
                proxima: 1
            },
            {
                texto: "Inventar um alerta de enchente para chamar a atenção da turma.",
                afirmacao: ["Inventou um alerta de enchente e colocou outras pessoas em risco."],
                tipo: "gameover",
                disponivel: true,
                mensagem: "Um alerta falso pode causar pânico e levar pessoas a tomar decisões perigosas. Compartilhe apenas informações confirmadas por canais oficiais."
            }
        ]
    },
    { // 4 — A3: planejar a apresentação
        caminho: "A",
        enunciado:
            "Você vai apresentar à turma um plano de preparação para enchentes. " +
            "Como organiza a proposta?",
        alternativas: [
            {
                texto: "Montar um plano de emergência e pedir que a escola revise as orientações.",
                afirmacao: ["Montou um plano de emergência e pediu a revisão da escola."],
                tipo: "avancar",
                proxima: 5
            },
            {
                texto: "Usar o plano de evacuação já conferido pela escola.",
                afirmacao: ["Escolheu apresentar o plano de evacuação conferido pela escola."],
                tipo: "salto",
                proxima: 6
            },
            {
                texto: "Levar as orientações para ajudar os moradores do bairro.",
                afirmacao: ["Decidiu levar as orientações de prevenção aos moradores."],
                tipo: "trocar",
                proxima: 8,
                disponivel: true
            }
        ]
    },
    { // 5 — A4: revisar o plano
        caminho: "A",
        enunciado:
            "Na revisão, um colega percebe que o plano não explica como combinar um ponto de encontro seguro. " +
            "O que você faz?",
        alternativas: [
            {
                texto: "Acrescentar um ponto de encontro e confirmar o local com a escola.",
                afirmacao: ["Incluiu um ponto de encontro seguro e confirmou o local com a escola."],
                tipo: "avancar",
                proxima: 6
            },
            {
                texto: "Voltar às fontes oficiais para revisar as orientações.",
                afirmacao: ["Retomou a conferência das orientações oficiais."],
                tipo: "salto",
                proxima: 3
            },
            {
                texto: "Publicar o endereço de famílias que vivem em área de risco sem autorização.",
                afirmacao: ["Expôs dados pessoais de famílias sem autorização."],
                tipo: "gameover",
                disponivel: true,
                mensagem: "Divulgar endereços expõe famílias a riscos e viola sua privacidade. Para pedir ajuda, compartilhe informações somente com as equipes responsáveis."
            }
        ]
    },
    { // 6 — A5: organizar a apresentação
        caminho: "A",
        enunciado:
            "Antes de apresentar o plano de prevenção, você organiza os materiais. " +
            "O que não pode faltar?",
        alternativas: [
            {
                texto: "Fontes oficiais, itens essenciais e orientações para uma saída segura.",
                afirmacao: ["Organizou fontes oficiais, itens essenciais e orientações de saída segura."],
                tipo: "avancar",
                proxima: 11
            },
            {
                texto: "Voltar à revisão para incluir o ponto de encontro.",
                afirmacao: ["Retomou a revisão do plano e do ponto de encontro."],
                tipo: "salto",
                proxima: 5
            },
            {
                texto: "Levar o plano para um encontro de orientação no bairro.",
                afirmacao: ["Decidiu levar o plano de prevenção aos moradores."],
                tipo: "trocar",
                proxima: 10,
                disponivel: true
            }
        ]
    },
    { // 7 — B2: verificar a origem do aviso
        caminho: "B",
        enunciado:
            "A mensagem sobre o alagamento não indica quem a publicou. " +
            "Como você continua a verificação?",
        alternativas: [
            {
                texto: "Consultar os canais oficiais da Defesa Civil e da prefeitura.",
                afirmacao: ["Consultou os canais oficiais para verificar o aviso."],
                tipo: "avancar",
                proxima: 8
            },
            {
                texto: "Voltar à mensagem original e procurar uma fonte confiável.",
                afirmacao: ["Retomou a busca pela origem do aviso."],
                tipo: "salto",
                proxima: 2
            },
            {
                texto: "Acusar publicamente um vizinho de espalhar a mensagem sem provas.",
                afirmacao: ["Acusou um vizinho publicamente sem provas."],
                tipo: "gameover",
                disponivel: true,
                mensagem: "Acusar alguém sem provas pode causar danos e não confirma se o alerta é verdadeiro. Verifique a informação com a Defesa Civil e os canais oficiais."
            }
        ]
    },
    { // 8 — B3: orientar a comunidade
        caminho: "B",
        enunciado:
            "A Defesa Civil confirma que há risco de alagamento em algumas ruas. " +
            "Como você ajuda os moradores?",
        alternativas: [
            {
                texto: "Preparar orientações com rotas seguras e locais de abrigo confirmados.",
                afirmacao: ["Preparou orientações com rotas e abrigos confirmados."],
                tipo: "avancar",
                proxima: 9
            },
            {
                texto: "Usar o comunicado oficial revisado e organizar um encontro.",
                afirmacao: ["Escolheu o comunicado oficial para orientar os moradores."],
                tipo: "salto",
                proxima: 10
            },
            {
                texto: "Levar as orientações para uma apresentação na escola.",
                afirmacao: ["Decidiu apresentar as orientações de prevenção na escola."],
                tipo: "trocar",
                proxima: 4,
                disponivel: true
            }
        ]
    },
    { // 9 — B4: revisar as orientações
        caminho: "B",
        enunciado:
            "Antes do encontro, você recebe uma atualização sobre os locais de abrigo. " +
            "Como revisa o material?",
        alternativas: [
            {
                texto: "Separar as informações confirmadas e atualizar os locais com fontes oficiais.",
                afirmacao: ["Atualizou os locais de abrigo com informações oficiais."],
                tipo: "avancar",
                proxima: 10
            },
            {
                texto: "Consultar novamente a Defesa Civil para confirmar a atualização.",
                afirmacao: ["Retomou a consulta à Defesa Civil para confirmar os abrigos."],
                tipo: "salto",
                proxima: 7
            },
            {
                texto: "Criar um aviso falso de evacuação e compartilhá-lo.",
                afirmacao: ["Criou e compartilhou um aviso falso de evacuação."],
                tipo: "gameover",
                disponivel: true,
                mensagem: "Um aviso falso de evacuação pode colocar moradores em perigo. Compartilhe alertas somente quando forem confirmados pelas autoridades."
            }
        ]
    },
    { // 10 — B5: organizar o encontro
        caminho: "B",
        enunciado:
            "Você prepara um encontro de orientação no bairro. " +
            "O que deve explicar aos moradores?",
        alternativas: [
            {
                texto: "Como acompanhar alertas oficiais, chegar a um abrigo e evitar áreas alagadas.",
                afirmacao: ["Organizou orientações sobre alertas, abrigos e áreas alagadas."],
                tipo: "avancar",
                proxima: 12
            },
            {
                texto: "Voltar à revisão para confirmar os locais de abrigo.",
                afirmacao: ["Retomou a revisão das orientações e dos abrigos."],
                tipo: "salto",
                proxima: 9
            },
            {
                texto: "Expor fotos e endereços de famílias atingidas sem autorização.",
                afirmacao: ["Expôs imagens e dados pessoais de famílias sem autorização."],
                tipo: "gameover",
                disponivel: true,
                mensagem: "Expor imagens e endereços pode colocar famílias atingidas em risco e desrespeita sua privacidade. Peça autorização e encaminhe pedidos de ajuda às equipes responsáveis."
            }
        ]
    },
    { // 11 — desafio final da narrativa A
        caminho: "A",
        enunciado:
            "Chegou a hora de apresentar o plano de prevenção à turma. " +
            "Como você conduz a apresentação?",
        alternativas: [
            {
                texto: "Explicar os alertas oficiais, o ponto de encontro e por que nunca se deve atravessar água de enchente.",
                afirmacao: ["Apresentou orientações de prevenção, alertas oficiais e cuidados em áreas alagadas."],
                tipo: "avancar",
                proxima: 13
            },
            {
                texto: "Revisar o plano mais uma vez com a escola antes de apresentá-lo.",
                afirmacao: ["Decidiu revisar o plano com a escola antes da apresentação."],
                tipo: "salto",
                proxima: 6
            },
            {
                texto: "Adaptar as orientações para compartilhar com os moradores do bairro.",
                afirmacao: ["Adaptou o plano para orientar os moradores do bairro."],
                tipo: "trocar",
                proxima: 12,
                disponivel: true
            }
        ]
    },
    { // 12 — desafio final da narrativa B
        caminho: "B",
        enunciado:
            "Chegou a hora de orientar os moradores sobre o risco de enchentes. " +
            "O que você apresenta no encontro?",
        alternativas: [
            {
                texto: "Como acompanhar a Defesa Civil, buscar abrigo seguro e não atravessar áreas alagadas.",
                afirmacao: ["Orientou os moradores a acompanhar alertas e buscar segurança sem atravessar áreas alagadas."],
                tipo: "avancar",
                proxima: 14
            },
            {
                texto: "Revisar as fontes e os locais de abrigo antes do encontro.",
                afirmacao: ["Revisou as fontes e os locais de abrigo antes do encontro."],
                tipo: "salto",
                proxima: 9
            },
            {
                texto: "Levar as orientações para uma apresentação na escola.",
                afirmacao: ["Levou as orientações sobre enchentes para a escola."],
                tipo: "trocar",
                proxima: 11,
                disponivel: true
            }
        ]
    },
    { // 13 — conclusão da narrativa A
        caminho: "A",
        final: "vitoria",
        enunciado:
            "A turma conhece o plano de prevenção, os canais oficiais e os cuidados para uma saída segura. " +
            "Sua apresentação ajuda a escola a se preparar para as enchentes."
    },
    { // 14 — conclusão da narrativa B
        caminho: "B",
        final: "vitoria",
        enunciado:
            "Os moradores sabem onde buscar informações confiáveis e como agir diante de um alerta. " +
            "Seu encontro fortalece a preparação da comunidade para as enchentes."
    }
];
