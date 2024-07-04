import React, { useState } from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom';
import './index.css';

export default function Login({ onLogin }) {
  const [formdata, setFormdata] = useState({
    name: '',
    password: ''
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:9000/login', formdata);
      if (response.status === 200) {
        alert('Successfully logged in!');
        onLogin() // Navigate to the home on success call onLogin function
      }
    } catch (err) {
      if (err.response && err.response.status === 400) {
        alert(err.response.data); // Show alert with the error message from the server
      } else {
        alert('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className='registration-flex-container'>
    <div className="registration-form-container">
      <div className="view-container">
        <h1 className="form-title">Login</h1>
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="input-container">
            <label className="input-label" htmlFor="name">Name:</label>
            <input
              type='text'
              name="name"
              id="name"
              value={formdata.name}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label className="input-label" htmlFor="password">Password:</label>
            <input
              type='password'
              name="password"
              id="password"
              value={formdata.password}
              onChange={handleChange}
            />
          </div>
          <button type='submit' className="submit-button">Submit</button>
        </form>
        <p>
          Don't have an account? <Link to="/signUp">Sign Up</Link>
        </p>
      </div>
    </div>
    </div>
  );
}
