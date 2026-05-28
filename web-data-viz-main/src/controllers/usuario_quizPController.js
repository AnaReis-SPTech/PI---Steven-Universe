var usuario_quizPModel = require("../models/usuario_quizPModel");

function cadastrar(req, res) {
    var coracao = req.body.coracaoServer
    var mente = req.body.menteServer
    var vontade = req.body.vontadeServer
    var espirito = req.body.espiritoServer
    var personagem = req.body.personagemServer;
    var id_usuario = req.body.usuarioServer;
    var id_quiz = req.body.iDquizServer;

    if (coracao == undefined) {

        res.status(400).send("Os coração está undefined!");

    } else if (mente == undefined) {

        res.status(400).send("Os mente está undefined!");

    } else if (vontade == undefined) {

        res.status(400).send("Os vontade está undefined!");

    } else if (espirito == undefined) {

        res.status(400).send("Os espirito está undefined!");

    } else if (personagem == undefined) {

        res.status(400).send("Os personagem está undefined!");

    } else {

        usuario_quizPModel.cadastrar(coracao, mente, vontade, espirito, personagem, id_usuario, id_quiz)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
    
}

module.exports = {
    cadastrar
}