USE master;
GO

-- Verifica se o banco de dados já existe e, se sim, o remove
IF EXISTS (SELECT * FROM sys.databases WHERE name = 'Bd_CadastroClientes')
BEGIN
    DROP DATABASE Bd_CadastroClientes;
END
GO

-- Cria o banco de dados
CREATE DATABASE Bd_CadastroClientes;
GO

-- Seleciona o banco de dados
USE Bd_CadastroClientes;
GO

-- Cria a tabela Cliente
CREATE TABLE Cliente (
    id INT IDENTITY PRIMARY KEY,    -- Define a coluna id como PRIMARY KEY e auto-incrementa
    nome NVARCHAR(100) NOT NULL,                -- Nome do cliente
    email NVARCHAR(255) UNIQUE NOT NULL,        -- Email do cliente, deve ser único
    senha NVARCHAR(20) UNIQUE NOT NULL,          -- Senha do cliente, deve ser única (não recomendado para senhas reais)
    cep CHAR(8),                              -- CEP do cliente
    telefone VARCHAR(20)                       -- Telefone do cliente
);
GO


CREATE TABLE DoarLivro(
    id INT IDENTITY PRIMARY KEY,
    nome NVARCHAR(100) NOT NULL,  
	titulo NVARCHAR (100) NOT NULL,
	genero NVARCHAR (100) NOT NULL,
	autor NVARCHAR (666) NOT NULL,
	descricao NVARCHAR (350) NOT NULL,
	imagem VARBINARY(MAX),


);
go
-- Insere um registro na tabela Cliente
INSERT INTO Cliente (nome, email, senha, cep, telefone)
VALUES ('Felipe Souza Santana', 'felipebebesuco@gmail.com', 'pitango123', '88888888', '11 987790585');
GO

INSERT INTO DoarLivro (nome, titulo, genero, autor, descricao)
VALUES ('Harry Potter', 'Harry Potter: A Pedra Filosofal', 'Fantasia', 'J.K Rowlling', 'embarque no mundo de Harry Potter');
GO

INSERT INTO Cliente (nome, email, senha, cep, telefone)
VALUES ('Eliezer Souza Santana', 'eliezerbebesuco@gmail.com', 'slaoq', '77777777', '11 888888888');
GO

-- Consulta todos os registros da tabela Cliente
SELECT * FROM Cliente;
SELECT *FROM DoarLivro
GO