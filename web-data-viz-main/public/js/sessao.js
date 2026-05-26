// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var nomeCompleto = sessionStorage.NOME_COMPLETO;
    var idade = sessionStorage.IDADE;

    var b_usuario = document.getElementsByClassName("b_usuario");
    var b_nome = document.getElementById('b_nome');
    var b_idade = document.getElementById('b_idade');

    if (email != null && nome != null) {

        for (let i = 0; i < b_usuario.length; i++) {
            b_usuario[i].innerHTML = nome;
        }

        if (b_nome != null && b_idade != null) {
            b_nome.innerHTML = nomeCompleto;
            b_idade.innerHTML = idade;
        }

    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.opacity = 1;
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.opacity = 1;

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.opacity = 0;
        divErrosLogin.innerHTML = texto;
    }
}

