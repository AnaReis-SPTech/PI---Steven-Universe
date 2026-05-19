// Bibliotecas do Node
var express = require("express");
var router = express.Router();

// Variável que vai importar os itens do Controller
var quizController = require("../controllers/quizController");

router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    quizController.listar(req, res);
});

module.exports = router;