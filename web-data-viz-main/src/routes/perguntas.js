// Bibliotecas do Node
var express = require("express");
var router = express.Router();

// Variável que vai importar os itens do Controller
var perguntasController = require("../controllers/perguntasController");

router.get("/listarPerguntas", function (req, res) {
    perguntasController.listarPerguntas(req, res);
});

module.exports = router;