/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import './index.css';
import ProductFilter from '../ProductFilter';

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        setProducts(response.data.products);
        setFilteredProducts(response.data.products);
        const uniqueCategories = [...new Set(response.data.products.map(product => product.category))];
        setCategories(uniqueCategories);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching the products:', error);
        setLoading(false);
      });
  }, []);

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

    if (value) {
      let filteredProducts = products;
      if (!isNaN(value)) {
        
        filteredProducts = products.filter(product => product.id === parseInt(value));
      } else {
        
        filteredProducts = products.filter(product => product.title.toLowerCase().includes(value.toLowerCase()));
      }
      
      if (filteredProducts.length === 0) {
        setFilteredProducts([{ id: 0, title: "Product not available", price: "", description: "" }]);
      } else {
        setFilteredProducts(filteredProducts);
      }
    } else {
      // Show all products when search term is cleared
      setFilteredProducts(products); 
    }
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category)
    filterProducts(searchTerm,category);
  };

  const filterProducts = (searchTerm, category) => {
    let filteredProducts = products;
    if (searchTerm) {
      if (!isNaN(searchTerm)) {
        filteredProducts = products.filter(product => product.id === parseInt(searchTerm));
      } else {
        filteredProducts = filteredProducts.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()));
      }
    }
    if (category) {
      filteredProducts = filteredProducts.filter(product => product.category === category);
    }
    if (filteredProducts.length === 0) {
      setFilteredProducts([{ id: 0, title: "Product not available", price: "", description: "" }]);
    } else {
      setFilteredProducts(filteredProducts);
    }
  };

  const handleSort = (event) => {
    const value = event.target.value;
    setSortOrder(value);
    localStorage.setItem('sortOrder', value);

    let sortedProducts = [...filteredProducts];
    if (value === 'lowToHigh') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (value === 'highToLow') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(sortedProducts);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSortOrder('');
    setSelectedCategory('');
    setFilteredProducts(products);
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
          <option value="">Sort by Price</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
        <button onClick={clearFilters} className="clear-filters-button">Clear Filters</button>
      </div>
      <div className="categories-container">
        {categories.map(category => (
          <button key={category} onClick={() => handleCategorySelect(category)} className={`category-button ${category === selectedCategory ? 'selected' : ''}`}>
            {category}
          </button>
        ))}
      </div>
      {loading ? (
        <div className="loader-container">
          <ClipLoader color="#007BFF" loading={loading} size={50} />
        </div>
      ) : (
        <ProductFilter filteredProducts={filteredProducts} addToCart={addToCart} />
      )}
    </div>
  );
};

export default ProductList;
