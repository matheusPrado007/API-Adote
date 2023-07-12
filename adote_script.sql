USE adotedb;

CREATE TABLE animal (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    idade INT,
    foto VARCHAR(255),
    descricao TEXT,
    uf VARCHAR(2),
    cidade VARCHAR(255)
);


