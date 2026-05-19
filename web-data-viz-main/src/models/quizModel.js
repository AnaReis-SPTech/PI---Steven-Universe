// Trecho que faz consulta no banco de dados
var database = require("../database/config");

function listar() {
    var instrucao = `
        SELECT * FROM perguntas WHERE fk_quiz = 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listar
};