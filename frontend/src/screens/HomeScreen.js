import React, { useState, useEffect } from 'react';
import Product from '../components/Product';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';

const HomeScreen = () => {
  // Using React hooks to manage products state
  const [products, setProducts] = useState([]);

  // Fetching the product data from the backend
  useEffect(() => {
    // Seperated function in order to use async/await in hook
    const fetchProducts = async () => {
      // Destructuring data from the response object
      const { data } = await axios.get('/api/products');

      // Setting state with data from backend
      setProducts(data);
    };

    fetchProducts(); // useEffect() calls this when triggered
  }, []);

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
