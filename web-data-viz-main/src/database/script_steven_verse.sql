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
dt_criacao DATE NOT NULL DEFAULT (CURDATE())
);

CREATE TABLE usuario_quiz (
fk_usuario INT,
fk_quiz INT,

CONSTRAINT ctpk_usuario_quiz
PRIMARY KEY (fk_usuario, fk_quiz),

CONSTRAINT ctfk_usuario_uq
FOREIGN KEY (fk_usuario)
REFERENCES usuario (id),

CONSTRAINT ctfk_quiz_uq
FOREIGN KEY (fk_quiz)
REFERENCES quiz (id),

dt_inicio DATE NOT NULL DEFAULT (CURDATE()),
qtd_acertos INT,
qtd_erros INT
);

CREATE TABLE perguntas (
id INT PRIMARY KEY AUTO_INCREMENT,
pergunta VARCHAR(200),
alt_1 VARCHAR(200),
alt_2 VARCHAR(200),
alt_3 VARCHAR(200),
alt_4 VARCHAR(200),
alt_correta CHAR(5),

fk_quiz INT,
CONSTRAINT ctfk_perguntas_pers_quiz
FOREIGN KEY (fk_quiz)
REFERENCES quiz (id)
);

INSERT INTO usuario (nome_completo, nome_usuario, email, senha, dt_nasc) VALUES
('ADM', 'ADM_Steven', 'steven@gmail.com', '12345678', '2001-08-15');

INSERT INTO quiz (titulo, tipo, descricao) VALUES
('Você realmente conhece Steven Universo?', 'Trivia', 'Esse quiz te mostra o quanto você realmente conhece de steven universe, tente a sorte!');

INSERT INTO perguntas (pergunta, alt_1, alt_2, alt_3, alt_4, alt_correta, fk_quiz) VALUES
('Qual o nome completo de steven?', 'Steven Universo', 'Steven Quartz Universo', 'Steven Quartz', 'Steven Topete', 'alt_2', 1),
('Qual a comida favorita do Steven?', 'Biscoito Gatinho', 'Rosquinha do Big Rosquinha', 'Café da Manhã em Conjunto', 'Pizza', 'alt_2', 1),
('Quais são as duas Gems que se fundem para formar a Garnet?', 'Rubi e Safira', 'Lapis e Jasper', 'Gar e Net', 'Rose Quartz e Safira', 'alt_1', 1),
('Qual o nome da fusão entre Steven e Connie?', 'Stevonnie', 'Connisven', 'Steconnie', 'Conniesteven', 'alt_1', 1),
('O que é a Garnet?', 'Uma fusão entre duas Gems', 'Uma conversa', 'O amor', 'Uma gem', 'alt_2', 1),
('Qual desses personagens fazem parte de "Acampamento dos Corações Apaixonados?"', 'Peridot', 'Percy', 'Stella', 'Oliver', 'alt_2', 1),
('Qual é a última música cantada na série principal?', 'Naquela Praia Distante', 'Familiar', 'Se De Ideia Mudar', 'O Que Posso Fazer Por Você?', 'alt_3', 1),
('Qual era a missão de Peridot quando chegou na Terra?', 'Construir uma Broca', 'Recuperar Lápis Lazule', 'Encontrar as Cristal Gems', 'Parar a Drusa', 'alt_4', 1),
('O que a Diamante Rosa fez com Bismuto', 'Matou-a', 'A levou de volta ao planeta natal', 'Prendeu-a em uma bolha', 'Estilhaçou-a', 'alt_3', 1),
('Qual o nome de Pérola em "Tacada Certeira?"', 'Pearl', 'Earl', 'Bob', 'Rose', 'alt_2', 1);

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