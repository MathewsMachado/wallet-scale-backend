const { Client } = require('pg');
const { parse } = require('pg-connection-string');

const Mockup = require('./Mockup.js');
const GenerateTransactions = require('../app/utils/GenerateTransactions.js');

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

  async populateTransactionsTable() {
    const [isTableFilled] = await this.query('SELECT * FROM transactions LIMIT 1', []);

    if (isTableFilled) {
      return console.log('Transactions table is already populated');
    }

    const transactions = GenerateTransactions.generate(Mockup.data);

    transactions.forEach(async ({ id, category, description, type, value, date }) => {
      await this.query(
        `INSERT INTO transactions(id, category, description, type, value, date)
        VALUES($1, $2, $3, $4, $5, $6)`,
        [id, category, description, type, value, date],
      );
    });

    console.log('Transactions table was successfully populated');
  }
}

module.exports = new Database();
