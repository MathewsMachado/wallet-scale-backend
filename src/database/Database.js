const { Client } = require('pg');
const { parse } = require('pg-connection-string');

const { NODE_ENV, DATABASE_URL } = process.env;

class Database {
  constructor() {
    this.connectionString = (
      NODE_ENV === 'development'
      ? parse(DATABASE_URL)
      : { ...parse(DATABASE_URL), ssl: { rejectUnauthorized: false } }
    );

    this.client = new Client(this.connectionString);
  }

  async query(statement, values) {
    const { rows } = await this.client.query(statement, values);

    return rows;
  }

  async connect() {
    await this.client.connect();

    console.log(`Database is running at port:${this.connectionString.port}`);
  }
}

module.exports = new Database();
