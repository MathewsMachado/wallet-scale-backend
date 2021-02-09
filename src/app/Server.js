const express = require('express');

const routes = require('./routes.js');
const ErrorMiddleware = require('../utils/ErrorMiddleware.js');

class Server {
  constructor() {
    this.app = express();
  }

  configurate() {
    this.app.use(express.json());
    this.app.use(routes);
    this.app.use(ErrorMiddleware.handleError);
  }

  run() {
    const { PORT } = process.env;

    this.configurate();
    this.app.listen(PORT, () => console.log(`Server is running at port:${PORT}`));
  }
}

module.exports = new Server();
