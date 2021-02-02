const { Router } = require('express');

const TransactionController = require('./controllers/TransactionController.js');

const routes = Router();

routes.post('/transactions', TransactionController.store);

module.exports = routes;
