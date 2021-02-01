require('dotenv').config();
require('express-async-errors');

const express = require('express');

const routes = require('./app/routes.js');
const ErrorMiddleware = require('./app/utils/ErrorMiddleware.js');

const { APP_PORT } = process.env;

const app = express();

app.use(express.json());
app.use(routes);
app.use(ErrorMiddleware);

app.listen(APP_PORT);
