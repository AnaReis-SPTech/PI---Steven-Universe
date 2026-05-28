const musicas = [
        {
            'titulo': 'Paz na Terra',
            // Descrição comentada
            // "Paz na Terra (e Muito Amor)" (originalmente Peace and Love (On the Planet Earth)) é uma música fofa e reflexiva do episódio "Poderia Ter Sido Ótimo" de Steven Universo. Cantada por Steven e Peridot, a música celebra a união, a aceitação da vida no Planeta Terra e a apreciação pelas pequenas coisas, marcando um passo importante na redenção da Peridot.

            'descricao': '',

            'linkMusica': 'https://www.youtube.com/embed/tia_UIVR-Ww?si=VlFpowCVFIBppCUe?autoplay=1&mute=1',

            'personagens': ['<img height="auto" width="150px" src="./../assets/imgs/simulador-steven.svg" alt="Icon Steven">', '<img height="auto" width="150px" src="./../assets/imgs/simulador-peridot.svg" alt="Icon Peridot">']
        },
        {
            'titulo': 'Biscoito Gatinho',
            // Descrição comentada
            // "Biscoito Gatinho" (Cookie Cat) é a música de abertura do primeiro episódio de Steven Universo, "O Brilho da Pedra", cantada por Steven para celebrar seu sanduíche de sorvete favorito. A letra, escrita por Rebecca Sugar e Jeff Liu, é uma paródia divertida e dramática que descreve o biscoito como um "refugiado de uma guerra estelar" que "deixou a família pra trás".

            'descricao': '',

            'linkMusica': 'https://www.youtube.com/embed/BMaXMH5Y4os?si=dijBqa94NQ0nJMT4',

            'personagens': ['<img height="auto" width="150px" src="./../assets/imgs/simulador-steven.svg" alt="Icon Steven">']
        },
        {
            'titulo': 'Nós Somos As Cristal Gems',
            // Descrição comentada
            // A música de abertura de Steven Universo, intitulada "Nós Somos as Crystal Gems" ("We Are the Crystal Gems" em inglês), é um tema pop cativante e enérgico que introduz os protagonistas e a premissa da série. Cantada inicialmente por Steven no episódio piloto, ela estabelece o tom de aventura, amizade e proteção do planeta Terra contra ameaças.

            'descricao': '',

            'linkMusica': 'https://www.youtube.com/embed/B-G4BNVLuSU?si=pbZzXaoPhhQSWO6i',

            'personagens': ['<img height="auto" width="150px" src="./../assets/imgs/simulador-steven.svg" alt="Icon Steven">']
        },
        {
            'titulo': 'Pra que sentimento, Azul?',
            // Descrição comentada
            // "Pra Que Sentimento (Azul)" (What's the Use of Feeling (Blue)?) é uma música de Steven Universo (episódio "Isso é Tudo") cantada por Diamante Amarelo para Diamante Azul. Ela questiona a utilidade do luto e das emoções, focando na necessidade de repressão, ordem e utilidade funcional das Gems no Planeta Natal.

            'descricao': ``,

            'linkMusica': 'https://www.youtube.com/embed/C87M9FNsbw4?si=Wrdi7df7JfITxYvl',

            'personagens': ['<img height="auto" width="150px" src="./../assets/imgs/simulador-d-amarelo.svg" alt="Icon Peridot">']
        },
        {
            'titulo': 'É mais forte que você',
            // Descrição comentada
            //"É Mais Forte Que Você" (Stronger Than You) é o clímax musical de Steven Universo, cantada por Garnet no episódio "Libertador" (Jail Break) ao enfrentar Jasper. A música celebra o amor, a estabilidade da união entre Rubi e Safira, e o empoderamento, provando que o amor é mais forte que a força bruta e o preconceito.

            'descricao': '',

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

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-pequeno-mordomo.svg" alt="">']
        },
        {
            'titulo': 'Abertura de Steven Universe Futuro',

            'descricao': '',

            'linkMusica': 'https://www.youtube.com/embed/zNy7ANM7ZPs?si=hgunQBjOGTiX9q1T',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Ainda Não Desisti',

            'descricao': '',

            'linkMusica': 'https://www.youtube.com/embed/21L7tE7W24Q?si=UcidiOPxKUJKjVM3',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Algo Original',

            'descricao': '',

            'linkMusica': 'https://www.youtube.com/embed/9Q0eZ6emyZc?si=8XE4apmT9XwLd3Nr',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Amigos que Fez',

            'descricao': '',

            'linkMusica': 'https://www.youtube.com/embed/FV1IjGeqMKk?si=qkHwik4FRoNwE0CB',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Amo Vocês Dois',

            'descricao': '',

            'linkMusica': 'https://www.youtube.com/embed/9iKljVCNaC0?si=qOJK5Uq7f1o0Bvld',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Aqui Foi Um Pensamento',

            'descricao': '',

            'linkMusica': 'https://www.youtube.com/embed/EOXhe-TENSU?si=Sr9AqZxf961OEepi',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Steven e os Stevens',

            'descricao': '',

            'linkMusica': 'https://www.youtube.com/embed/Kk_VEKnEG3Y?si=S0qKGfMEFHDM5iTC',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Cantar Nossa Canção',

            'descricao': '',

            'linkMusica': 'https://www.youtube.com/embed/mHCGM-ffqGQ?si=1eeDGU78Z90Nmakh" title="YouTube video player',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Canção De Aniversário',

            'descricao': '',

            'linkMusica': 'https://www.youtube.com/embed/QgML6mmdmHk?si=vxEp5a4h3HwVUxk3',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Por Que Tão Azul?',

            'descricao': '',

            'linkMusica': 'https://www.youtube.com/embed/wvnVPmzx8Dg?si=Obwgqtah4nsrPlqZ',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Desobediente',

            'descricao': '',

            'linkMusica': 'https://www.youtube.com/embed/1--ZhoC_OC0?si=02keudm-XYKmf2CT',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Minha Vã Vai Pro Seu Coração',

            'descricao': '',

            'linkMusica': 'https://www.youtube.com/embed/urchO-uWg5U?si=VqdxuHxesRbmFURr',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Empire City',

            'descricao': '',

            'linkMusica': 'https://www.youtube.com/embed/FPEOGgKDk5U?si=2fxnnBk4UBrZu3fs',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Encontrada',

            'descricao': '',

            'linkMusica': 'https://www.youtube.com/embed/EZ_4-ZJmABg?si=O-NwL7KIrBxeMBkv',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Escapismo',

            'descricao': '',

            'linkMusica': 'https://www.youtube.com/embed/6TnuH4-n_20?si=JvCSHOAMRRe95aGT',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Familiar',

            'descricao': '',

            'linkMusica': 'https://www.youtube.com/embed/I2Nh3J2ALDg?si=_aL67pbrrxqlWiMb',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Fan-Fan-Fantasma',

            'descricao': '',

            'linkMusica': 'https://www.youtube.com/embed/hwyw8c7EKdw?si=jAFEAMTfdtbN5hAu',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Felizes Pra Sempre',

            'descricao': '',

            'linkMusica': 'https://www.youtube.com/embed/emR-jtBJ07g?si=O-X2MfyXWg8X_D2C',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Forte de Verdade',

            'descricao': '',

            'linkMusica': 'https://www.youtube.com/embed/Kap8FCUxVBw?si=dwKDA8m8QK5UpJdH',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Independentes Unidos',

            'descricao': '',

            'linkMusica': 'https://www.youtube.com/embed/D4-E6f-CfUM?si=STSoiL_JRsIX75Cj',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Ir Por Aí',

            'descricao': '',

            'linkMusica': 'https://www.youtube.com/embed/8lLd49y45oc?si=SmSHx6lnP3SQo7k4',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Lápis Lazule',

            'descricao': '',

            'linkMusica': 'https://www.youtube.com/embed/xaY3liVp3N4?si=xS3ZUVJOiVf2XJRi',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Mudança',

            'descricao': '',

            'linkMusica': 'https://www.youtube.com/embed/jXS0C42b1ro?si=NL1NHCiLMsW6sBSD',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Mulher Gigante',

            'descricao': '',

            'linkMusica': 'https://www.youtube.com/embed/MnJhQyyLTY8?si=y88_cpyhHvhiaHkV',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Naquela Praia Distante',

            'descricao': '',

            'linkMusica': 'https://www.youtube.com/embed/IMupo9x4dIU?si=321jl5mJXvm984tu',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Big Rosquinha',

            'descricao': '',

            'linkMusica': 'https://www.youtube.com/embed/L_Mc2x-rlWM?si=kWJzTvfD-aod3row',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Nunca Poderia Estar Pronto',

            'descricao': '',

            'linkMusica': 'https://www.youtube.com/embed/X0ZEQBG-jNc?si=C3E_Anu8bEmOjFB1',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Não Custa Nada',

            'descricao': '',

            'linkMusica': 'https://www.youtube.com/embed/n-DT6xj89VE?si=3Fk3z8lXbSMgM1pN',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Não Quero Isso Pra Você',

            'descricao': '',

            'linkMusica': 'https://www.youtube.com/embed/vUlFvNfZhCk?si=9aO4iduICayhrmQj',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Merecemos Brilhar',

            'descricao': '',

            'linkMusica': 'https://www.youtube.com/embed/EMX30z8Z8f8?si=fKpj_A-8eMopnFMI',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Que Posso Fazer Por Você',

            'descricao': '',

            'linkMusica': 'https://www.youtube.com/embed/EPvjimmv38k?si=cVcuwTg9QDz2FsfO',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Onde Querem Estar',

            'descricao': '',

            'linkMusica': 'https://www.youtube.com/embed/iGG644Oqcac?si=gr2RViQK0FHbosjO',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Operários e Zumbis',

            'descricao': '',

            'linkMusica': 'https://www.youtube.com/embed/OZjOF-nFq4o?si=V1yxDLnc2WGqnx-G',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Pedra do Grito',

            'descricao': '',

            'linkMusica': 'https://www.youtube.com/embed/XDSaiL-3of0?si=vXlIkm3dmbdCxPd-',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Pra Longe Daqui',

            'descricao': '',

            'linkMusica': 'https://www.youtube.com/embed/d0n4Vcq9Q3k?si=rsCodlopR0olysO-',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Queremos Adorá-la',

            'descricao': '',

            'linkMusica': 'https://www.youtube.com/embed/K5_wNFN5PL8?si=OKK_dA9fh9HNrRQw',

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
            'titulo': 'Sou Uma Estrela',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Steven E As Crystal Gems',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Ste-Ste-Ste Steven',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'System/BOOT.pearl final(3).Info',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Só Vamos Só Pensar Em Amor',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Tema De Encerramento',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Torre de Erros',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Tô Precisando De Uma Troca',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'Verdadeiro Amor',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'É Isso Acabou?',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        },
        {
            'titulo': 'É Mais Forte Que Você',

            'descricao': '',

            'linkMusica': '',

            'personagens': ['<img height="auto" width="180px" src="./../assets/imgs/simulador-" alt="">']
        }
    ]