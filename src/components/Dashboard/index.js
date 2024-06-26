import React, { useState } from 'react';
import ProductList from '../ProductList';
import './index.css';

const mockProducts = [
      {
        id:1,
        name: "Motorola",
        price: "₹14,999 16% off",
        description: "Bank OfferGet ₹50 instant discount on first Flipkart UPI transaction on order of ₹200 and aboveT&C"
      },
      {
        id:2,
        name: "Iphone",
        price: "₹59,999 16% off",
        description: "Bank OfferGet ₹50 instant discount on first Flipkart UPI transaction on order of ₹200 and aboveT&C"
      },
      {
        id:3,
        name: "Samsung",
        price: "₹69,999 16% off",
        description: "Bank OfferGet ₹50 instant discount on first Flipkart UPI transaction on order of ₹200 and aboveT&C"
      },
      {
        id:4,
        name: "Redmi",
        price: "₹29,999 16% off",
        description: "Bank OfferGet ₹50 instant discount on first Flipkart UPI transaction on order of ₹200 and aboveT&C"
      },
      {
        id:5,
        name: "Oppo",
        price: "₹39,999 16% off",
        description: "Bank OfferGet ₹50 instant discount on first Flipkart UPI transaction on order of ₹200 and aboveT&C"
      },
      {
        id:6,
        name: "Vivo",
        price: "₹35,999 16% off",
        description: "Bank OfferGet ₹50 instant discount on first Flipkart UPI transaction on order of ₹200 and aboveT&C"
      },
      {
        id:7,
        name: "Poco",
        price: "₹14,999 16% off",
        description: "Bank OfferGet ₹50 instant discount on first Flipkart UPI transaction on order of ₹200 and aboveT&C"
      },
      {
        id:8,
        name: "Nothing",
        price: "₹59,999 16% off",
        description: "Bank OfferGet ₹50 instant discount on first Flipkart UPI transaction on order of ₹200 and aboveT&C"
      },
      {
        id:9,
        name: "Lenevo",
        price: "₹69,999 16% off",
        description: "Bank OfferGet ₹50 instant discount on first Flipkart UPI transaction on order of ₹200 and aboveT&C"
      },
      {
        id:10,
        name: "Honor",
        price: "₹29,999 16% off",
        description: "Bank OfferGet ₹50 instant discount on first Flipkart UPI transaction on order of ₹200 and aboveT&C"
      },
      {
        id:11,
        name: "Nokia",
        price: "₹39,999 16% off",
        description: "Bank OfferGet ₹50 instant discount on first Flipkart UPI transaction on order of ₹200 and aboveT&C"
      },
      {
        id:12,
        name: "OnePluse",
        price: "₹35,999 16% off",
        description: "Bank OfferGet ₹50 instant discount on first Flipkart UPI transaction on order of ₹200 and aboveT&C"
      }
  
  
];

const Dashboard = () => {
  const [products, setProducts] = useState(mockProducts);
  const [searchTerm, setSearchTerm] = useState('');

  const handleFilter = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    const filteredProducts = mockProducts.filter(product =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    setProducts(filteredProducts);
  };

  return (
    <div className="dashboard">
      <h1>Product Filter</h1>
      <input
        type="text"
        placeholder="Search Products..."
        value={searchTerm}
        onChange={handleFilter}
        className="search-input"
      />
      <ProductList products={products} />
    </div>
  );
};

export default Dashboard;
