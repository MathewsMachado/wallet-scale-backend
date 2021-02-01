CREATE DATABASE wallet_scale;

CREATE TYPE transaction_type as ENUM ('+', '-');

CREATE TABLE IF NOT EXISTS transactions(
  id UUID PRIMARY KEY,
  category VARCHAR NOT NULL,
  description VARCHAR NOT NULL,
  type transaction_type NOT NULL,
  value NUMERIC(9, 2) NOT NULL,
  date DATE NOT NULL,
  created_at TIME NOT NULL DEFAULT CURRENT_TIME,
  updated_at TIME NOT NULL DEFAULT CURRENT_TIME
);
