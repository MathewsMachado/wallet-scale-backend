require('dotenv').config();

const { Client } = require('pg');
const { parse } = require('pg-connection-string');

const mockup = require('./mockup.js');
const GenerateTransactions = require('../app/utils/GenerateTransactions.js');

const { DATABASE_URL } = process.env;

class Database {
  constructor() {
    this.client = new Client(parse(DATABASE_URL));

    this.client.connect();
    this.populateTransactionsTable();
  }

  async query(statement, values) {
    const { rows } = await this.client.query(statement, values);

    return rows;
  }

  async populateTransactionsTable() {
    const [isTableFilled] = await this.query('SELECT * FROM transactions LIMIT 1', []);

    if (isTableFilled) {
      return;
    }

    const transactions = GenerateTransactions.generate(mockup);

    transactions.forEach(async ({ id, category, description, type, value, date }) => {
      await this.query(
        `INSERT INTO transactions(id, category, description, type, value, date)
        VALUES($1, $2, $3, $4, $5, $6)`,
        [id, category, description, type, value, date],
      );
    });

    console.log('Database was successfully populated');
  }
}

module.exports = new Database();
