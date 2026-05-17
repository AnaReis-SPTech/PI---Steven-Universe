var express = require("express");
var router = express.Router();

var avisoController = require("../controllers/avisoController");

router.get("/listar", function (req, res) {
    avisoController.listar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    avisoController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:mensagem", function (req, res) {
    avisoController.pesquisarMensagem(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    avisoController.publicar(req, res);
});

router.put("/editar/:idMensagem", function (req, res) {
    avisoController.editar(req, res);
});

router.delete("/deletar/:idMensagem", function (req, res) {
    avisoController.deletar(req, res);
});

module.exports = router;