import React from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import './index.css';


const Dashboard = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(); // Call the logout function passed from parent component
    navigate('/'); // Navigate to the login page after logout
  };

  return (
    <>
    <div className="dashboard">
      <h1>Welcome To Shopping</h1>
      <ul className="nav-menu">
      <li><Link className="nav-link" to="/home">Home</Link></li>
        <li><Link className="nav-link" to="/products">Products</Link></li>
        <li><Link className="nav-link" to="/cart">Cart</Link></li>
        <li><Link className="nav-link" to="/about">About</Link></li>
        <li><button className="logout-btn" onClick={handleLogout}>Logout</button></li>
      </ul>
    </div>
    <Outlet/>
    </>
  );
}

export default Dashboard;
