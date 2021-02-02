const Database = require('../../database/Database.js');

class TransactionRepository {
  async create({ id, category, description, type, value, date }) {
    const [row] = await Database.query(
      `INSERT INTO transactions(id, category, description, type, value, date)
      VALUES($1, $2, $3, $4, $5, $6)
      RETURNING *`,
      [id, category, description, type, value, date],
    );

    return row;
  }

  async findAll() {
    const rows = await Database.query('SELECT * FROM transactions');

    return rows;
  }

  async findById(id) {
    const [row] = await Database.query(
      `SELECT * FROM transactions
      WHERE id = $1`,
      [id],
    );

    return row;
  }

  async update(id, { category, description, type, value, date }) {
    const [row] = await Database.query(
      `UPDATE transactions
      SET category = $1, description = $2, type = $3, value = $4, date = $5
      WHERE id = $6
      RETURNING *`,
      [category, description, type, value, date, id],
    );

    return row;
  }
}

module.exports = new TransactionRepository();
