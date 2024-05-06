CREATE TABLE candidato(
    candidato_id SERIAL NOT NULL,
    nome varchar(100) NOT NULL,
    email varchar(100) NOT NULL,
    telefone varchar(15) NOT NULL,
    data_nascimento date NOT NULL,
    endereco varchar(255),
    PRIMARY KEY(candidato_id)
);
CREATE UNIQUE INDEX UQ_fc2ec77e6bdacc0ff09bec42384 ON candidato USING btree ("email");

CREATE TABLE educacao(
    educacao_id SERIAL NOT NULL,
    candidato_id integer NOT NULL,
    instituicao varchar(100) NOT NULL,
    grau_academico varchar(50) NOT NULL,
    data_inicio date NOT NULL,
    data_fim date,
    descricao text,
    "candidatoCandidatoId" integer,
    PRIMARY KEY(educacao_id),
    CONSTRAINT FK_dffd0169ac8ac94fdb89f2caa00 FOREIGN key("candidatoCandidatoId") REFERENCES candidato(candidato_id)
);

CREATE TABLE experiencias_profissionais(
    experiencia_id SERIAL NOT NULL,
    candidato_id integer NOT NULL,
    empresa varchar(100) NOT NULL,
    cargo varchar(50) NOT NULL,
    data_inicio date NOT NULL,
    data_fim date,
    descricao text,
    "candidatoCandidatoId" integer,
    PRIMARY KEY(experiencia_id),
    CONSTRAINT FK_ce03c2a29c5411a4a677a37adba FOREIGN key("candidatoCandidatoId") REFERENCES candidato(candidato_id)
);

CREATE TABLE habilidades(
    habilidade_id SERIAL NOT NULL,
    candidato_id integer NOT NULL,
    habilidade varchar(50) NOT NULL,
    nivel varchar(20) NOT NULL,
    "candidatoCandidatoId" integer,
    PRIMARY KEY(habilidade_id),
    CONSTRAINT FK_9a712d4bb5982e143a348ed1347 FOREIGN key("candidatoCandidatoId") REFERENCES candidato(candidato_id)
);

CREATE TABLE idioma(
    idioma_id SERIAL NOT NULL,
    nome varchar(50) NOT NULL,
    nivel varchar(20) NOT NULL,
    candidato_id integer NOT NULL,
    "candidatoCandidatoId" integer,
    PRIMARY KEY(idioma_id),
    CONSTRAINT FK_b02df46f1c344d88a1edd4c7f78 FOREIGN key("candidatoCandidatoId") REFERENCES candidato(candidato_id)
);