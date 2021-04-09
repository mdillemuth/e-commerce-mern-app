// Common JS Syntax (not using ES syntax)
// const express = require('express');
// const dotenv = require('dotenv');
// const products = require('./data/products');

// Using the import syntax (ES)
// NOTE: Because of using es modules with Node, we need to add .js to file names

import express from 'express';
import dotenv from 'dotenv';
import products from './data/products.js';
import connectDB from './config/db.js';
import colors from 'colors';

dotenv.config(); // Start dotenv
const app = express(); // Start Express
connectDB(); // Connect to MongoDB

// Testing that the server is running
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Serving the products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Serving an individual product
app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

// Using .env for setting PORT
const PORT = process.env.PORT || 5000;

// Starts server and displays the port and environment being run in
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
