// Trecho que faz consulta no banco de dados
var database = require("../database/config");

function listarMaiorAtributo(idUsuario) {
    var instrucao = `
        SELECT
            u.nome_usuario,
            SUM(uq.coracao) AS qtd_coracao,
            SUM(uq.mente) AS qtd_mente,
            SUM(uq.vontade) AS qtd_vontade,
            SUM(uq.espirito) AS qtd_espirito
        FROM usuario AS u
        JOIN usuario_quiz AS uq
        ON u.id = uq.fk_usuario
        WHERE u.id = ${idUsuario}
        GROUP BY uq.fk_usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarMaiorPersonagem(idUsuario) {
    var instrucao = `
        SELECT
            u.id AS idUsuario,
            uq.personagem AS personagem,
            COUNT(uq.personagem) AS contagem
        FROM usuario_quiz AS uq
        JOIN usuario AS u
        ON u.id = uq.fk_usuario
        WHERE u.id = ${idUsuario}
        GROUP BY uq.personagem, u.id
        ORDER BY contagem DESC
        LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarUsuarioTentativas(idUsuario) {
    var instrucao = `
        SELECT
            u.nome_usuario,
            COUNT(uq.fk_usuario) AS UserTentativas
        FROM usuario_quiz AS uq
        JOIN usuario AS u
        ON u.id = uq.fk_usuario
        WHERE fk_quiz = 2
        AND fk_usuario = ${idUsuario}
        GROUP BY uq.fk_usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarGeralTentativas() {
    var instrucao = `
        SELECT
            TRUNCATE(AVG(contagem), 0) AS media_todos
        FROM (
            SELECT
                fk_quiz,
                COUNT(fk_usuario) AS contagem
            FROM usuario_quiz
            WHERE fk_quiz = 2
            GROUP BY fk_usuario
        ) AS uq
        GROUP BY fk_quiz;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarRanking() {
    var instrucao = `
        SELECT
            u.id AS id,
            u.nome_usuario,
            TRUNCATE(AVG(uq.qtd_acertos), 0) AS m_acertos
        FROM usuario_quiz AS uq
        JOIN usuario AS u
        ON u.id = uq.fk_usuario
        GROUP BY u.nome_usuario, u.id
        HAVING m_acertos IS NOT NULL
        ORDER BY m_acertos DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarGraficoGerais() {
    var instrucao = `
        SELECT
            TRUNCATE(AVG(uq.coracao), 1) AS qtd_coracao,
            TRUNCATE(AVG(uq.mente), 1) AS qtd_mente,
            TRUNCATE(AVG(uq.vontade), 1) AS qtd_vontade,
            TRUNCATE(AVG(uq.espirito), 1) AS qtd_espirito
        FROM usuario AS u
        JOIN usuario_quiz AS uq
        ON u.id = uq.fk_usuario
        WHERE uq.fk_quiz = 2
        GROUP BY uq.fk_quiz;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarGraficoUsuario(idUsuario) {
    var instrucao = `
        SELECT
            u.id AS id,
            TRUNCATE(AVG(uq.coracao), 1) AS qtd_coracao,
            TRUNCATE(AVG(uq.mente), 1) AS qtd_mente,
            TRUNCATE(AVG(uq.vontade), 1) AS qtd_vontade,
            TRUNCATE(AVG(uq.espirito), 1) AS qtd_espirito
        FROM usuario AS u
        JOIN usuario_quiz AS uq
        ON u.id = uq.fk_usuario
        WHERE u.id = ${idUsuario}
        GROUP BY uq.fk_usuario;
        `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listarMaiorAtributo,
    listarMaiorPersonagem,
    listarUsuarioTentativas,
    listarGeralTentativas,
    listarRanking,
    listarGraficoGerais,
    listarGraficoUsuario
};