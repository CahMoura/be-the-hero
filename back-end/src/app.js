const express = require('express');
const routes = require('./routes');
const cors = require("cors");
const { errors } = require('celebrate');
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(errors());

/**TDD (Test-Driven Development) Desenvolvimento dirigido a testes.
 * Fazer o teste antes da aplicação
 * */
//evitar erros com códigos 500 Internacional Server Error

/** 
 * Banco de Dados SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
*/

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */

module.exports = app;