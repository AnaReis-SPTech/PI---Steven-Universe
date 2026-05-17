const musicas = [
        {
            'titulo': 'Paz na Terra',

            'descricao': '"Paz na Terra (e Muito Amor)" (originalmente Peace and Love (On the Planet Earth)) é uma música fofa e reflexiva do episódio "Poderia Ter Sido Ótimo" de Steven Universo. Cantada por Steven e Peridot, a música celebra a união, a aceitação da vida no Planeta Terra e a apreciação pelas pequenas coisas, marcando um passo importante na redenção da Peridot.',

            'linkMusica': 'https://www.youtube.com/embed/tia_UIVR-Ww?si=VlFpowCVFIBppCUe?autoplay=1&mute=1',

            'personagens': ['<img height="auto" width="150px" src="./../assets/imgs/simulador-steven.svg" alt="Icon Steven">', '<img height="auto" width="150px" src="./../assets/imgs/simulador-peridot.svg" alt="Icon Peridot">']
        },
        {
            'titulo': 'Biscoito Gatinho',

            'descricao': '"Biscoito Gatinho" (Cookie Cat) é a música de abertura do primeiro episódio de Steven Universo, "O Brilho da Pedra", cantada por Steven para celebrar seu sanduíche de sorvete favorito. A letra, escrita por Rebecca Sugar e Jeff Liu, é uma paródia divertida e dramática que descreve o biscoito como um "refugiado de uma guerra estelar" que "deixou a família pra trás".',

            'linkMusica': 'https://www.youtube.com/embed/BMaXMH5Y4os?si=dijBqa94NQ0nJMT4',

            'personagens': ['<img height="auto" width="150px" src="./../assets/imgs/simulador-steven.svg" alt="Icon Steven">']
        },
        {
            'titulo': 'Nós Somos As Cristal Gems',

            'descricao': 'A música de abertura de Steven Universo, intitulada "Nós Somos as Crystal Gems" ("We Are the Crystal Gems" em inglês), é um tema pop cativante e enérgico que introduz os protagonistas e a premissa da série. Cantada inicialmente por Steven no episódio piloto, ela estabelece o tom de aventura, amizade e proteção do planeta Terra contra ameaças.',

            'linkMusica': 'https://www.youtube.com/embed/B-G4BNVLuSU?si=pbZzXaoPhhQSWO6i',

            'personagens': ['<img height="auto" width="150px" src="./../assets/imgs/simulador-steven.svg" alt="Icon Steven">']
        },
        {
            'titulo': 'Pra que sentimento, Azul?',

            'descricao': `"Pra Que Sentimento (Azul)" (What's the Use of Feeling (Blue)?) é uma música de Steven Universo (episódio "Isso é Tudo") cantada por Diamante Amarelo para Diamante Azul. Ela questiona a utilidade do luto e das emoções, focando na necessidade de repressão, ordem e utilidade funcional das Gems no Planeta Natal.`,

            'linkMusica': 'https://www.youtube.com/embed/C87M9FNsbw4?si=Wrdi7df7JfITxYvl',

            'personagens': ['<img height="auto" width="150px" src="./../assets/imgs/simulador-d-amarelo.svg" alt="Icon Peridot">']
        },
        {
            'titulo': 'É mais forte que você',

            'descricao': '"É Mais Forte Que Você" (Stronger Than You) é o clímax musical de Steven Universo, cantada por Garnet no episódio "Libertador" (Jail Break) ao enfrentar Jasper. A música celebra o amor, a estabilidade da união entre Rubi e Safira, e o empoderamento, provando que o amor é mais forte que a força bruta e o preconceito.',

            'linkMusica': 'https://www.youtube.com/embed/ECt6xk3eEbU?si=EevRP1Ta9MKmg8hh',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-garnet.svg" alt="Icon Peridot">']
        },
        {
            'titulo': 'A Canção da Arrumação',

            'descricao': '',

            'linkMusica': 'https://www.youtube.com/embed/pxL2FmAj3nA?si=sNJyzTM4VABidQDI',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-arco-iris-quartz.svg" alt="Icon Quatz Arco-Íris">']
        },
        {
            'titulo': 'Abertura de Pequeno Mordomo',

            'descricao': '',

            'linkMusica': 'https://www.youtube.com/embed/9pjST3xnj6k?si=gKH8EzFrK8mGM-J3',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador.svg" alt="">']
        },
        {
            'titulo': 'Abertura de Steven Universe Futuro',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Ainda Não Desisti',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Algo Original',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Amigos que Fez',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Amo Vocês Dois',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Aqui Foi Um Pensamento',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Steven e os Stevens',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Cantar Nossa Canção',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Canção De Aniversário',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Canção Séria',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Cor em Difusão',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Desobediente',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Minha Vã Vai Pro Seu Coração',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Empire City',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Encontrada',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Escapismo',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Familiar',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Fan-Fan-Fantasma',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Felizes Pra Sempre',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Forte de Verdade',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Independentes Unidos',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Ir Por Aí',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Lápis Lazule',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Mudança',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Mulher Gigante',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Naquela Praia Distante',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Big Rosquinha',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Nunca Poderia Estar Pronto',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Não Custa Nada',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Não Quero Isso Pra Você',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'We Deserve To Shine',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Que Posso Fazer Por Você',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'O Conto de Steven',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Onde Querem Estar',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Operários e Zumbis',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Pedra do Grito',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Pique Steven',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Pra Longe Daqui',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Queremos Adorá-la',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Querido Pai',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Razão Pra Viver',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Rubi Viajante',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Sadie Killer e os Suspeitos',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Música Da Safira',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Se de Ideia Mudar',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Se Em Destino Acreditar',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Se Por Ela Fizer',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Seja Como For',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Senhor Greg',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Será Que Não É Amor',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Somos Assim',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Sou Um Cometa',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': '',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': '',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': '',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': '',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': '',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': '',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': '',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': '',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': '',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': '',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': '',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': '',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': '',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': '',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': '',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': '',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': '',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': '',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': '',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': '',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': '',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        }
    ]