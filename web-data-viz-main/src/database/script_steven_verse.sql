CREATE DATABASE steven_verse;
USE steven_verse;
-- DROP DATABASE steven_verse;

CREATE TABLE usuario (
id INT PRIMARY KEY AUTO_INCREMENT,
nome_completo VARCHAR (100),
nome_usuario VARCHAR(50) NOT NULL,
email VARCHAR(255) NOT NULL UNIQUE,
senha VARCHAR (255) NOT NULL,
dt_nasc DATE NOT NULL,
dt_cad DATE NOT NULL DEFAULT (CURDATE())
);

CREATE TABLE mensagem (
id INT PRIMARY KEY AUTO_INCREMENT,
titulo VARCHAR(100),
mensagem VARCHAR(255),

fk_usuario INT,
CONSTRAINT ctfk_usuario_mensagem
FOREIGN KEY (fk_usuario)
REFERENCES usuario (id)
);

CREATE TABLE quiz (
id INT PRIMARY KEY AUTO_INCREMENT,
titulo VARCHAR(100),
tipo VARCHAR(100),
descricao VARCHAR(255),
dt_criacao DATE NOT NULL DEFAULT (CURDATE()),
dt_inicio DATETIME,

fk_usuario INT,
CONSTRAINT ctfk_usuario_quiz
FOREIGN KEY (fk_usuario)
REFERENCES usuario (id)
);

CREATE TABLE perguntas_personalidade (
id INT PRIMARY KEY AUTO_INCREMENT,
pergunta VARCHAR(200),
alt_1 VARCHAR(200),
alt_2 VARCHAR(200),
alt_3 VARCHAR(200),
alt_4 VARCHAR(200),
pts_atributo_1 INT,
pts_atributo_2 INT,
pts_atributo_3 INT,
pts_atributo_4 INT,

fk_quiz INT,
CONSTRAINT ctfk_perguntas_pers_quiz
FOREIGN KEY (fk_quiz)
REFERENCES quiz (id)
);

CREATE TABLE perguntas (
id INT PRIMARY KEY AUTO_INCREMENT,
pergunta VARCHAR(200),
alt_1 VARCHAR(200),
alt_2 VARCHAR(200),
alt_3 VARCHAR(200),
alt_certa VARCHAR(200),
tt_acertos INT,
tt_erros INT,

fk_quiz INT,
CONSTRAINT ctfk_perguntas_quiz
FOREIGN KEY (fk_quiz)
REFERENCES quiz (id)
);

INSERT INTO usuario (nome_completo, nome_usuario, email, senha, dt_nasc) VALUES
('ADM', 'ADM_Steven', 'steven@gmail.com', '12345678', '2001-08-15');

SELECT * FROM usuario;
SELECT * FROM mensagem;

-- Acesso ao BD VM lubuntu
-- DB_HOST='%'
-- DB_DATABASE='steven_verse'
-- DB_USER='lubuntu_steven_verso'
-- DB_PASSWORD='O1amor@e@conversa'
-- DB_PORT='3307'

-- Acesso ao BD local
-- DB_HOST='localhost'
-- DB_DATABASE='steven_verse'
-- DB_USER='acesso_steven_verso'
-- DB_PASSWORD='o_amor_e_conversa'
-- DB_PORT='3306'