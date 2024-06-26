import React from 'react';
import './index.css';

const ProductList = ( {products} ) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-item"> 
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
