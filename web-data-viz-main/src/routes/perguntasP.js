// Bibliotecas do Node
var express = require("express");
var router = express.Router();

// Variável que vai importar os itens do Controller
var perguntasPController = require("../controllers/perguntasPController");

router.get("/listarPerguntas", function (req, res) {
    // função a ser chamada quando acessar /carros/listar
    perguntasPController.listarPerguntas(req, res);
});

module.exports = router;