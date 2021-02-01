const { Router } = require('express');

const TransactionController = require('./controllers/TransactionController.js');

const routes = Router();

routes.get('/transactions', TransactionController.index);

module.exports = routes;
