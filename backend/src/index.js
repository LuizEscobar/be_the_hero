const express = require('express');
const cors = requeire('cors');
const routes = require('./routes');

const app = express();

// app.use(cors({http://meuapp.com})); // limita acesso á esse endereço (mais segurança)
app.use(cors()); 
app.use(express.json());
app.use(routes);

/** 
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/Listar no back-end
 * POST: Criar no back-end
 * PUT: Alterar no back-end
 * DELETE: Deletar no back-end
 */

/**
 * Tipos de Parâmetros
 * 
 * Query Params: parametros nomeados enviados na rota após "?"
 * Route Params: parametros utilizados para indentificar recursos 
 * Request Body: corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostreSQL, Oracle, Express
 * NoSQL: MongoDB, etc...
 */

/**
 *  Driver: SELECT * FROM users
 *  Query Builder: table('users').Select('*').where() 
 */

 



app.listen(3333);

