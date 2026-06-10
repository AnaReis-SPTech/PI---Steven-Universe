// Bibliotecas do Node
var express = require("express");
var router = express.Router();

// Variável que vai importar os itens do Controller
var resultQuizController = require("../controllers/resultQuizController");

router.get("/listarMaiorAtributo/:id", function (req, res) {
    resultQuizController.listarMaiorAtributo(req, res);
});

router.get("/listarMaiorPersonagem/:id", function (req, res) {
    resultQuizController.listarMaiorPersonagem(req, res);
});

router.get("/listarUsuarioTentativas/:id", function (req, res) {
    resultQuizController.listarUsuarioTentativas(req, res);
});

router.get("/listarGeralTentativas/", function (req, res) {
    resultQuizController.listarGeralTentativas(req, res);
});

router.get("/listarRanking/", function (req, res) {
    resultQuizController.listarRanking(req, res);
});

router.get("/listarGraficoGerais/", function (req, res) {
    resultQuizController.listarGraficoGerais(req, res);
});

router.get("/listarGraficoUsuario/:id", function (req, res) {
    resultQuizController.listarGraficoUsuario(req, res);
});

module.exports = router;