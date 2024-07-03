import React, { useState, useEffect } from 'react';
import './index.css';

const mockProducts = [
  { id: 1, name: "Motorola", price: "₹14,999 16% off", description: "Bank OfferGet ₹50 instant discount on first Flipkart UPI transaction on order of ₹200 and aboveT&C" },
  { id: 2, name: "Iphone 15", price: "₹59,999 16% off", description: "Bank OfferGet ₹50 instant discount on first Flipkart UPI transaction on order of ₹200 and aboveT&C" },
  { id: 3, name: "Samsung S22", price: "₹69,999 16% off", description: "Bank OfferGet ₹50 instant discount on first Flipkart UPI transaction on order of ₹200 and aboveT&C" },
  { id: 4, name: "Redmi", price: "₹29,999 16% off", description: "Bank OfferGet ₹50 instant discount on first Flipkart UPI transaction on order of ₹200 and aboveT&C" },
  { id: 5, name: "Oppo", price: "₹39,999 16% off", description: "Bank OfferGet ₹50 instant discount on first Flipkart UPI transaction on order of ₹200 and aboveT&C" },
  { id: 6, name: "Vivo", price: "₹35,999 16% off", description: "Bank OfferGet ₹50 instant discount on first Flipkart UPI transaction on order of ₹200 and aboveT&C" },
  { id: 7, name: "Poco", price: "₹14,999 16% off", description: "Bank OfferGet ₹50 instant discount on first Flipkart UPI transaction on order of ₹200 and aboveT&C" },
  { id: 8, name: "Nothing", price: "₹59,999 16% off", description: "Bank OfferGet ₹50 instant discount on first Flipkart UPI transaction on order of ₹200 and aboveT&C" },
  { id: 9, name: "Lenevo", price: "₹69,999 16% off", description: "Bank OfferGet ₹50 instant discount on first Flipkart UPI transaction on order of ₹200 and aboveT&C" },
  { id: 10, name: "Honor", price: "₹29,999 16% off", description: "Bank OfferGet ₹50 instant discount on first Flipkart UPI transaction on order of ₹200 and aboveT&C" },
  { id: 11, name: "Nokia", price: "₹39,999 16% off", description: "Bank OfferGet ₹50 instant discount on first Flipkart UPI transaction on order of ₹200 and aboveT&C" },
  { id: 12, name: "OnePluse", price: "₹35,999 16% off", description: "Bank OfferGet ₹50 instant discount on first Flipkart UPI transaction on order of ₹200 and aboveT&C" }
];

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState(mockProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  useEffect(() => {
    const savedSortOrder = localStorage.getItem('sortOrder');
    if (savedSortOrder) {
      setSortOrder(savedSortOrder);
      handleSort({ target: { value: savedSortOrder } });
    }
  }, []);

  const handleFilter = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    let filteredProducts = mockProducts;

    if (value) {
      if (!isNaN(value)) {
        filteredProducts = mockProducts.filter(product => product.id === parseInt(value));
      } else {
        filteredProducts = mockProducts.filter(product => product.name.toLowerCase().includes(value.toLowerCase()));
      }
      if (filteredProducts.length === 0) {
        filteredProducts = [{ id: 0, name: "Product not available", price: "", description: "" }];
      }
    }
    setProducts(filteredProducts);
  };

  const handleSort = (event) => {
    const value = event.target.value;
    setSortOrder(value);
    localStorage.setItem('sortOrder', value); // Save the sort order to local storage

    let sortedProducts = [...products];
    if (value === 'lowToHigh') {
      sortedProducts.sort((a, b) => {
        const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
        const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
        return priceA - priceB;
      });
    } else if (value === 'highToLow') {
      sortedProducts.sort((a, b) => {
        const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
        const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
        return priceB - priceA;
      });
    }

    setProducts(sortedProducts);
  };

  return (
    <div className='products-container'>
      <div className='filters-container'>
        <input
          type="text"
          placeholder="Search Products..."
          value={searchTerm}
          onChange={handleFilter}
          className="search-input"
        />
        <select onChange={handleSort} value={sortOrder} className="sort-dropdown">
          <option value="">Sort by</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <p>{product.description}</p>
            {product.id !== 0 && <button onClick={() => addToCart(product)}>Add to Cart</button>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
