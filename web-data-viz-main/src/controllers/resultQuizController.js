// Variável que puxa os itens do quizModel
var quizModel = require("../models/resultQuizModel");

function listarMaiorAtributo(req, res) {
    let idUsuario = req.params.id
    console.log(idUsuario);

    quizModel.listarMaiorAtributo(idUsuario).then(function(resultado){

        console.log("Puxei o maior atributo" + resultado)
        res.status(200).json(resultado);
    }).catch(function(erro){
        console.log("Erro ao listarUsuarioTentativas() quiz: ", erro)
        res.status(500).json(erro.sqlMessage);
    })
}

function listarMaiorPersonagem(req, res) {
    let idUsuario = req.params.id
    console.log(idUsuario);
    quizModel.listarMaiorPersonagem(idUsuario).then(function(resultado){

        console.log("Puxei o maior personagem" + resultado)
        res.status(200).json(resultado);
    }).catch(function(erro){
        console.log("Erro ao listarMaiorPersonagem() quiz: ", erro)
        res.status(500).json(erro.sqlMessage);
    })
}

function listarUsuarioTentativas(req, res) {
    let idUsuario = req.params.id
    console.log(idUsuario);
    quizModel.listarUsuarioTentativas(idUsuario).then(function(resultado){

        console.log("Puxei as tentativas do usuário" + resultado)
        res.status(200).json(resultado);
    }).catch(function(erro){
        console.log("Erro ao listarUsuarioTentativas() quiz: ", erro)
        res.status(500).json(erro.sqlMessage);
    })
}

function listarGeralTentativas(req, res) {
    quizModel.listarGeralTentativas().then(function(resultado){

        console.log("Puxei as tentativas gerais" + resultado)
        res.status(200).json(resultado);
    }).catch(function(erro){
        console.log("Erro ao listarGeralTentativas() quiz: ", erro)
        res.status(500).json(erro.sqlMessage);
    })
}

function listarRanking(req, res) {
    quizModel.listarRanking().then(function(resultado){

        console.log("Puxei o ranking" + resultado)
        res.status(200).json(resultado);
    }).catch(function(erro){
        console.log("Erro ao listarRanking() quiz: ", erro)
        res.status(500).json(erro.sqlMessage);
    })
}

function listarGraficoGerais(req, res) {
    quizModel.listarGraficoGerais().then(function(resultado){

        console.log("Puxei o GraficoGerais" + resultado)
        res.status(200).json(resultado);
    }).catch(function(erro){
        console.log("Erro ao GraficoGerais() quiz: ", erro)
        res.status(500).json(erro.sqlMessage);
    })
}

function listarGraficoUsuario(req, res) {
    let idUsuario = req.params.id
    console.log(idUsuario);
    quizModel.listarGraficoUsuario(idUsuario).then(function(resultado){

        console.log("Puxei o GraficoUsuario" + resultado)
        res.status(200).json(resultado);
    }).catch(function(erro){
        console.log("Erro ao GraficoUsuario() quiz: ", erro)
        res.status(500).json(erro.sqlMessage);
    })
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