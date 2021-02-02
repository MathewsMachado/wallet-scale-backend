const { Router } = require('express');

const TransactionController = require('./controllers/TransactionController.js');

const routes = Router();

routes.post('/transactions', TransactionController.store);
routes.get('/transactions', TransactionController.index);
routes.get('/transactions/:id', TransactionController.show);
routes.put('/transactions/:id', TransactionController.update);
routes.delete('/transactions/:id', TransactionController.delete);

module.exports = routes;
