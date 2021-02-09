# Wallet Scale Backend
If you want to check this project running, click [here!](https://wallet-scale-backend.herokuapp.com/transactions)

## Overview
It's a REST API built with [NodeJS](https://nodejs.org/en), [Express](https://expressjs.com/), [PostgreSQL](https://www.postgresql.org/) and deployed on [Heroku](https://www.heroku.com/) that serves the Wallet Scale App.

This is also part of my personal portfolio, so I'll be grateful if you give me feedback, advice or something else that could help me become a better developer.

**Send me an email: [mathews.machadoamorim@gmail.com](mailto:mathews.machadoamorim@gmail.com).**

## Features
Its main goal is to record/provide data to the Wallet Scale application frontend.

It only has one endpoint so far — the transactions one — in charge of the CRUD operations of the incomes and expenses.

## Getting Started
### Prerequisites
You'll need [git](https://git-scm.com/downloads) installed to clone this repository, [NodeJS](https://nodejs.org/en/download/) to run the API and [PostgreSQL](https://www.postgresql.org/download/) to store the data.

### Downloading the project
1. Cloning the Repository
```shell
git clone https://github.com/MathewsMachado/wallet-scale-backend
```

2. Accessing the Project's folder
```shell
cd wallet-scale-backend
```

### Setting up the database
1. If you are Unix-based OS user, solve the authentication problem first
1.1. <https://gist.github.com/AtulKsol/4470d377b448e56468baef85af7fd614>
1.2. <https://stackoverflow.com/questions/18664074/getting-error-peer-authentication-failed-for-user-postgres-when-trying-to-ge>

2. Connect to postgres
```shell
psql -U postgres
```
3. Create the database
```sql
CREATE DATABASE wallet_scale;
```
4. Connect to database
```sql
\c wallet-scale;
```
5. Create transaction_type type
```sql
CREATE TYPE transaction_type as ENUM ('+', '-');
```
6. Create transactions table
```sql
CREATE TABLE IF NOT EXISTS transactions(
  id UUID PRIMARY KEY,
  category VARCHAR NOT NULL,
  description VARCHAR NOT NULL,
  type transaction_type NOT NULL,
  value NUMERIC(9, 2) NOT NULL,
  date DATE NOT NULL
);
  ```
7. Exit Postgres terminal
```sql
\q
```

### Setting up the Environment Variables
1. Create a .env file at the project root
```shell
touch .env
```
2. Set NODE_ENV, PORT and DATABASE_URL values.
2.1 NODE_ENV={{ development || production }}
2.2 PORT={{ port.number }}
2.3 DATABASE_URL=postgres://{{ user.name }}:{{ user.password }}@{{ host.name }}:{{ port.number }}/{{ database.name }}

### Install dependencies
```shell
npm install
```

### Run the server
```shell
npm run dev
```
## Observations and Technical Informations
### Dependencies
[dotenv](https://github.com/motdotla/dotenv): Module that loads environment variables from a .env file into process.env.

[express](https://expressjs.com/): Web application framework that provides a robust set of features for web and mobile applications.

[express-async-errors](https://github.com/davidbanham/express-async-errors): Module that handles asynchronous errors in Nodejs.

[pg](https://node-postgres.com/): Non-blocking PostgreSQL client.

[pg-connection-string](https://github.com/brianc/node-postgres/tree/master/packages/pg-connection-string): Postgres connection string parser.

[uuid](https://github.com/uuidjs/uuid): Universally unique identifier generator.

### Dev-Dependencies
[eslint](https://eslint.org/): A static code analysis tool for identifying problematic patterns found in JavaScript code.

[nodemon](https://github.com/remy/nodemon): Utility tool that monitors your project for any changes and automatically restart your server.

## To-do
1. Create user signin and signup routes.
2. Create a relation in database between users and transactions.
3. Migrate to [TypeScript](https://www.typescriptlang.org/).

## License
This project is license under the MIT License - see the [LICENSE](https://github.com/MathewsMachado/wallet-scale-backend/blob/master/LICENSE) file for details.
