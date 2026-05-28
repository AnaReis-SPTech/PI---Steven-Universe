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
id_usuario_quiz INT PRIMARY KEY AUTO_INCREMENT,
fk_usuario INT,
fk_quiz INT,

CONSTRAINT ctfk_usuario_uq
FOREIGN KEY (fk_usuario)
REFERENCES usuario (id),

CONSTRAINT ctfk_quiz_uq
FOREIGN KEY (fk_quiz)
REFERENCES quiz (id),

dt_inicio DATE NOT NULL DEFAULT (CURDATE()),
qtd_acertos INT,
qtd_erros INT,

personagem VARCHAR(45),
coracao INT,
mente INT,
vontade INT,
espirito INT
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

INSERT INTO quiz (titulo, tipo, descricao) VALUES
('Quem você seria em Steven Universo?', 'Personalidade', 'Com esse quiz você pode descobrir quem você seria em Steven Universo a partir de seus atributos!');

INSERT INTO perguntas (pergunta, alt_1, alt_2, alt_3, alt_4, fk_quiz) VALUES
('O que você faz em um momento ruim?', 'Tento entender o lado do outro', 'Analiso os fatos e procuro uma solução lógica', 'Mantenho a calma para apoiar quem amo', 'Costumo agir como a emoção me manda na hora', 2),
('Como você lida com seus sentimentos?', 'Falo abertamente sobre eles', 'Guardo para mim e demoro me abrir', 'Tento processar tudo de forma sistemática, as vezes até demais', 'Desabafo com quem tenho maior confiança', 2),
('Qual qualidade você mais valoriza em si?', 'Minha força de vontade para aprender e evoluir', 'Meu foco em proteger e cuidar de quem eu amo', 'Minha liberdade em não esconder quem sou', 'Minha capacidade de enxergar o lado bom da vida e das pessoas', 2),
('Quando faço trabalho em equipe, qual papel você costumo ter?', 'Quem une o grupo e garante que todos estejam bem', 'O que planeja os passos, estuda os riscos', 'O que resolve os problemas com sagacidade', 'O que executa as tarefas do próprio jeito, com originalidade', 2),
('Como você reage quando comete um erro?', 'Peço desculpas e tento consertar o dano emocional', 'Tento disfarçar com piadas ou mudo de assunto', 'Fico muito frustrado comigo mesmo e reviso o que fiz de errado', 'Absorvo o impacto em silêncio', 2),
('Qual é a sua maior ambição?', 'Ver todos que eu amo vivendo em paz', 'Provar o meu valor e ser mestra em alguma habilidade ou área', 'Poder viver a vida nos meus próprios termos, sem amarras do passado.', 'Cumprir meu dever com excelência e honrar o legado de quem veio antes', 2),
('O que mais te tira do sério no comportamento de outras pessoas?', 'Gente que se acha superior e desvaloriza a inteligência alheia', 'Crueldade ou falta de empatia com quem não pode se defender', 'Falta de compromisso, bagunça crônica e irresponsabilidade com horários', 'Cobranças excessivas ou pessoas tentando controlar cada passo meu', 2),
('Qual é a sua forma ideal de passar o tempo livre?', 'Focando em hobbies que me tornem mais preparado ou inteligente', 'Reunindo amigos, comendo bobagens, jogando videogame ou curtindo uma festa', 'Ficar totalmente sozinho em um espaço calmo para processar meus pensamentos', 'Relaxar em um ambiente pacífico, de preferência na natureza ou com quem amo', 2),
('Quando alguém que você gosta está triste, o que você faz?', 'Escuto com paciência e dou conselhos baseados em lógica e sabedoria', 'Ofereço ajuda para resolver o problema técnico ou físico que causou a tristeza.', 'Dou carinho, valido os sentimentos dela e tento fazê-la sorrir', 'Tento distrair a pessoa tirando-a de casa ou fazendo palhaçadas para aliviar o clima', 2),
('Como você costuma lidar com mudanças na sua vida?', 'Sinto muita dificuldade em desapegar da rotina antiga e sofro com a transição', 'Encaro como um desafio científico ou uma oportunidade de aprender coisas novas', 'Entendo que ciclos começam e terminam, mantendo o foco no quadro geral', 'Deixo as coisas acontecerem e vou me moldando conforme o ambiente muda', 2);

SELECT * FROM usuario;
SELECT * FROM mensagem;
SELECT * FROM usuario_quiz;

-- SELECT para o ranking do quiz de trivia
SELECT
	u.nome_usuario,
    TRUNCATE(AVG(uq.qtd_acertos), 1) AS m_acertos
FROM usuario_quiz AS uq
JOIN usuario AS u
ON u.id = uq.fk_usuario
GROUP BY u.nome_usuario;

-- SELECT para maior atributo da pessoa
-- Completar com if's no back-end
SELECT
	u.nome_usuario,
    SUM(uq.coracao),
    SUM(uq.mente),
    SUM(uq.vontade),
	SUM(uq.espirito)
FROM usuario AS u
JOIN usuario_quiz AS uq
ON u.id = uq.fk_usuario
GROUP BY uq.fk_usuario;

-- SELECT para personagem mais sorteado
-- No back-end fazer distinção de qual foi o maior
SELECT
	u.id AS idUsuario,
	uq.personagem AS personagem,
	COUNT(uq.personagem) AS contagem
FROM usuario_quiz AS uq
JOIN usuario AS u
ON u.id = uq.fk_usuario
GROUP BY uq.personagem, u.id;

-- SELECT para número de tentativas em comparação aos outros usuários
-- Da pessoa
SELECT
	u.nome_usuario,
    COUNT(uq.fk_usuario)
FROM usuario_quiz AS uq
JOIN usuario AS u
ON u.id = uq.fk_usuario
WHERE fk_quiz = 2
GROUP BY uq.fk_usuario;

-- Dos outros
SELECT
    AVG(contagem) AS media_todos
FROM (
	SELECT
		fk_quiz,
		COUNT(fk_usuario) AS contagem
	FROM usuario_quiz
    GROUP BY fk_quiz
) AS uq
WHERE fk_quiz = 2
GROUP BY fk_quiz;

-- Select listarPerguntas() perguntas
-- SELECT id, pergunta, alt_1, alt_2, alt_3, alt_4, alt_correta, fk_quiz FROM perguntas WHERE fk_quiz = 1;

-- Select listarQuiz() quiz
-- SELECT id, titulo, tipo, descricao FROM quiz;

-- Insert para cadastrar() usuario_quiz resultados
INSERT INTO usuario_quiz (coracao, mente, vontade, espirito, personagem, fk_usuario, fk_quiz) VALUES ( 9, 1, 0, 0, 'peridot', 1, 2);

SELECT id, nome_usuario AS nome, email, senha , nome_completo, TIMESTAMPDIFF(YEAR, dt_nasc, CURDATE()) AS idade FROM usuario WHERE email = '${email}' AND senha = '${senha}';

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