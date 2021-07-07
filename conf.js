const mysql = require('mysql2/promise');

require('dotenv').config();

const { DB_HOST, DB_USER, DB_NAME, DB_PASSWORD } = process.env;

const connection = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

module.exports = { db: connection };
