const Database = require('../database/Database');
const Mockup = require('../database/Mockup');

class PopulateTransactionsTable {
  async populate() {
    const [isTableFilled] = await Database.query('SELECT * FROM transactions LIMIT 1', []);

    if (isTableFilled) {
      return console.log('Transactions table is already populated');
    }

    const transactions = Mockup.generateTransactions();

    transactions.forEach(async ({ id, category, description, type, value, date }) => {
      await Database.query(
        `INSERT INTO transactions(id, category, description, type, value, date)
          VALUES($1, $2, $3, $4, $5, $6)`,
        [id, category, description, type, value, date],
      );
    });

    console.log('Transactions table was successfully populated');
  }
}

module.exports = new PopulateTransactionsTable();
