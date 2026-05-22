var database = require("../database/config");

function cadastrar(acertos, erros) {
    var instrucao = `
        INSERT INTO usuario_quiz (qtd_acertos, qtd_erros, fk_usuario, fk_quiz) VALUES ( ${acertos}, ${erros}, 1, 1);
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao); 
}

module.exports = {
    cadastrar
};