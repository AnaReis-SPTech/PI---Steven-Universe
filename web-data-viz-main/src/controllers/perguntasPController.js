// Variável que puxa os itens do quizModel
var perguntasPModel = require("../models/perguntasPModel");

function listarPerguntas(req, res) {
    perguntasPModel.listarPerguntas().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        console.log("Puxei as perguntas" + resultado)
        res.status(200).json(resultado);
    }).catch(function(erro){
        console.erro("Erro ao listar perguntas: ", erro)
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listarPerguntas
}