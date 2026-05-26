// Trecho que faz consulta no banco de dados
var database = require("../database/config");

function listarPerguntas(id_quiz) {
    var instrucao = `
        SELECT id, pergunta, alt_1, alt_2, alt_3, alt_4, alt_correta, fk_quiz FROM perguntas WHERE fk_quiz = 2;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listarPerguntas
};