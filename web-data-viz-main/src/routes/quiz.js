// Bibliotecas do Node
var express = require("express");
var router = express.Router();

// Variável que vai importar os itens do Controller
var quizController = require("../controllers/quizController");

router.get("/listarQuiz", function (req, res) {
    // função a ser chamada quando acessar /carros/listarQuiz
    quizController.listarQuiz(req, res);
});

module.exports = router;