require('dotenv').config();

const express = require('express');

const { APP_PORT } = process.env;

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.json({ index: true }));

app.listen(APP_PORT);
