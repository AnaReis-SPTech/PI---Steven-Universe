var express = require("express");
var router = express.Router();

var usuario_quizController = require("../controllers/usuario_quizController");

router.post("/cadastrar", function (req, res) {
    usuario_quizController.cadastrar(req, res);
});

module.exports = router;