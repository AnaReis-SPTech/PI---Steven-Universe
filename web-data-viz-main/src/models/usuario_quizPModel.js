var database = require("../database/config");

function cadastrar(coracao, mente, vontade, espirito, personagem, id_usuario, id_quiz) {
    var instrucao = `
        INSERT INTO usuario_quiz (coracao, mente, vontade, espirito, personagem, fk_usuario, fk_quiz) VALUES ( ${coracao}, ${mente}, ${vontade}, ${espirito}, '${personagem}', ${id_usuario}, ${id_quiz});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao); 
}

module.exports = {
    cadastrar
};