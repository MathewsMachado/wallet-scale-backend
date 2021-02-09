require('express-async-errors');

const express = require('express');

const routes = require('./app/routes.js');
const ErrorMiddleware = require('./utils/ErrorMiddleware.js');
const Database = require('./database/Database.js');

const { PORT } = process.env;

const app = express();

app.use(express.json());
app.use(routes);
app.use(ErrorMiddleware.handleError);

app.listen(PORT, async () => {
  console.log('App is running')
  await Database.connect();
  await Database.populateTransactionsTable();
});
