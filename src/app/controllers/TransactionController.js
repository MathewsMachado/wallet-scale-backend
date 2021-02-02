const { v4 } = require('uuid');

const TransactionRepository = require('../respositories/TransactionRepository.js');

class TransactionController {
  async store(request, response) {
    const { category, description, type, value, date } = request.body;

    if (!category) {
      return response.status(400).json({ error: 'Category is required' });
    }

    if (!description) {
      return response.status(400).json({ error: 'Description is required' });
    }

    if (!type) {
      return response.status(400).json({ error: 'Type is required' });
    }

    if (!value) {
      return response.status(400).json({ error: 'Value is required' });
    }

    if (!date) {
      return response.status(400).json({ error: 'Date is required' });
    }

    const transaction = await TransactionRepository.create({
      category,
      description,
      type,
      value,
      date,
      id: v4(),
    });

    response.status(200).json(transaction);
  }

  async index(request, response) {
    const transactions = await TransactionRepository.findAll();

    response.status(200).json(transactions);
  }

  async show(request, response) {
    const { id } = request.params;

    const transaction = await TransactionRepository.findById(id);

    if (!transaction) {
      return response.status(404).json({ error: 'Transaction not found' });
    }

    response.status(200).json(transaction);
  }
}

module.exports = new TransactionController();
