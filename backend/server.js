// Common JS Syntax (not using ES syntax)
const express = require('express');
const products = require('./data/products');

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
  res.json(products);
});

// Start running the server on port 5000
app.listen(5000, console.log('Server running on port 5000'));
