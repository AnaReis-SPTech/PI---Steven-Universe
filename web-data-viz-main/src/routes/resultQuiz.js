// Bibliotecas do Node
var express = require("express");
var router = express.Router();

// Variável que vai importar os itens do Controller
var resultQuizController = require("../controllers/resultQuizController");

router.get("/listarMaiorAtributo/:id", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    resultQuizController.listarMaiorAtributo(req, res);
});

router.get("/listarMaiorPersonagem/:id", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    resultQuizController.listarMaiorPersonagem(req, res);
});

router.get("/listarUsuarioTentativas/:id", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    resultQuizController.listarUsuarioTentativas(req, res);
});

router.get("/listarGeralTentativas/", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    resultQuizController.listarGeralTentativas(req, res);
});

router.get("/listarRanking/", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    resultQuizController.listarRanking(req, res);
});

router.get("/listarGraficoGerais/", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    resultQuizController.listarGraficoGerais(req, res);
});

router.get("/listarGraficoUsuario/:id", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    resultQuizController.listarGraficoUsuario(req, res);
});

module.exports = router;