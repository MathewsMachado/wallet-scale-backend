require('dotenv').config();
require('express-async-errors');

const express = require('express');

const ErrorMiddleware = require('./app/utils/ErrorMiddleware.js');

const { APP_PORT } = process.env;

const app = express();

app.use(express.json());
app.use(ErrorMiddleware);

app.get('/', (req, res) => res.json({ index: true }));

app.listen(APP_PORT);
