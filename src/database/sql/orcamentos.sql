CREATE TABLE orcamentos (
    id varchar(32) PRIMARY KEY,
    datacadastro date NOT NULL,
    nome varchar(200) NOT NULL,
    email varchar(50) NOT NULL,
    celular varchar(11) NOT NULL,
    produto varchar(200) NOT NULL,
    peso integer NOT NULL,
    valor integer NOT NULL,
    origem varchar(200) NOT NULL,
    destino varchar(200) NOT NULL,
    observacao varchar(500),
    status varchar(20) NOT NULL
);