// Variável que puxa os itens do quizModel
var quizModel = require("../models/quizModel");

function listarQuiz(req, res) {
    quizModel.listarQuiz().then(function(resultado){

        console.log("Puxei os quizes" + resultado)
        res.status(200).json(resultado);
    }).catch(function(erro){
        console.erro("Erro ao listarQuiz quiz: ", erro)
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listarQuiz
}