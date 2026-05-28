var database = require("../database/config");

function cadastrar(acertos, erros, id_usuario, id_quiz) {
    var instrucao = `
        INSERT INTO usuario_quiz (qtd_acertos, qtd_erros, fk_usuario, fk_quiz) VALUES (${acertos}, ${erros}, ${id_usuario}, ${id_quiz});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao); 
}

module.exports = {
    cadastrar
};