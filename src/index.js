require('express-async-errors');

const Server = require('./app/Server.js');
const Database = require('./database/Database.js');
const PopulateTransactionsTable = require('./utils/PopulateTransactionsTable.js');

(async () => {
  try {
    await Database.connect();
    await PopulateTransactionsTable.populate();
  } catch (error) {
    console.log(error);
  }

  Server.run();
})();
