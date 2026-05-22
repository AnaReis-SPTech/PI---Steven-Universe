var usuario_quizModel = require("../models/usuario_quizModel");

function cadastrar(req, res) {
    var erros = req.body.errosServer;
    var acertos = req.body.acertosServer;

    if (erros == undefined) {

        res.status(400).send("Os erros estão undefined!");

    } else if (acertos == undefined) {

        res.status(400).send("Os acertos estão undefined!");

    } else {

        usuario_quizModel.cadastrar(acertos, erros)
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

    usuario_quizModel.cadastrar(acertos, erros).then(function (resposta) {
        res.status(200).send("Resultado criado com sucesso");
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    cadastrar
}