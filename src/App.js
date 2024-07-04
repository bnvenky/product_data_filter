import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import About from './components/About';
import Login from './components/Login';
import SignUp from './components/SignUp'
import Home from './components/Home';

import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem('cartItems');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });
  
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const savedAuthState = localStorage.getItem('isAuthenticated');
    return savedAuthState ? JSON.parse(savedAuthState) : false;
  });

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', JSON.stringify(true));
    window.location.href = '/home';
     // Redirect to products after login
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
    window.location.href = '/'; // Redirect to login after logout
  };

  const addToCart = (product) => {
    const updatedCartItems = [...cartItems, product];
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <BrowserRouter>
    <Routes>
      {/* Login Route */}
      <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />} />
      <Route path='/signUp' element={<SignUp/>}/>
      {/* Dashboard Routes */}
      <Route path="/" element={isAuthenticated ? <Dashboard onLogout={handleLogout} /> : <Navigate to="/" />} >
        <Route path="home" element={<Home/>}/>
        <Route path="products" element={<ProductList addToCart={addToCart} />} />
        <Route path="cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
};

export default App;