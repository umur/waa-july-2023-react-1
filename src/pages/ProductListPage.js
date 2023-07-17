import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductListComponent from '../components/ProductListComponent';

const ProductListPage = ({ accessToken }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/products', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, [accessToken]);

  return (
    <ProductListComponent products={ products } />
  );
};

export default ProductListPage;
