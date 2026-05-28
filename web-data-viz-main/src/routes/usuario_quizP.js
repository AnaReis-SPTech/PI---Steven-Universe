var express = require("express");
var router = express.Router();

var usuario_quizPController = require("../controllers/usuario_quizPController");

router.post("/cadastrar", function (req, res) {
    usuario_quizPController.cadastrar(req, res);
});

module.exports = router;