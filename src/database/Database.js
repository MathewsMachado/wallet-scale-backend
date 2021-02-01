require('dotenv').config();

const { Client } = require('pg');

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

class Database {
  constructor() {
    this.client = new Client({
      host: DB_HOST,
      port: DB_PORT,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_DATABASE,
    });

    this.client.connect();
  }

  async query(statement, values) {
    const { rows } = await this.client.query(statement, values);

    return rows;
  }
}

module.exports = new Database();
