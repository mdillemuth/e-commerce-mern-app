// Common JS Syntax (not using ES syntax)
// const express = require('express');
// const dotenv = require('dotenv');
// const products = require('./data/products');

// Using the import syntax (ES)
import express from 'express';
import dotenv from 'dotenv';
import products from './data/products.js';

// Initializing dotenv
dotenv.config();

// Initializing Express
const app = express();

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
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
