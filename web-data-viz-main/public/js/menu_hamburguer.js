    let sem_alteracoes = false;

    function abrirMenu() {
        let elementos = document.getElementsByClassName('textos-nav');
        let header = document.getElementById('header');

        if (sem_alteracoes) {
            console.log('ENTREI IF')

            header.classList.remove('header-aberto');

            for (let i = 0; i < elementos.length; i++) {
                elementos[i].classList.add('esconder');
            }
            sem_alteracoes = false;

        } else if (!sem_alteracoes) {
            console.log('ENTREI ELSE IF')

            header.classList.add('header-aberto');

            setTimeout(() => {
                for (let i = 0; i < elementos.length; i++) {
                    elementos[i].classList.remove('esconder');
                }
            }, 300);
            sem_alteracoes = true;
        }
    }