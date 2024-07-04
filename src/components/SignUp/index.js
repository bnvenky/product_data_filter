import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './index.css';

export default function SignUp() {
  const [formdata, setFormdata] = useState({
    id: uuidv4(),
    name: '',
    phoneNo: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const Navigate = useNavigate()

  const validation = () => {
    const newErrors = {};
    if (!formdata.name.match(/^[a-zA-Z]+$/)) {
      newErrors.name = 'Name should contain only alphabets';
    }
    if (!formdata.phoneNo.match(/^\d{10}$/)) {
      newErrors.phoneNo = 'Phone number should contain 10 digits';
    }
    if (!formdata.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/)) {
      newErrors.password = 'Password should be at least 8 characters long and contain capital letters, small letters, numbers, and special characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validation()) {
      try {
        const response = await axios.post('http://localhost:9000/users', formdata);
        alert(response.data);
        Navigate('/')
        // localStorage.setItem('formdata', JSON.stringify(formdata));
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className='registration-flex-container'>
    <div className="registration-form-container">
      <div className="view-container">
        <h1 className="form-title">SignUp</h1>
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="input-container">
            <label className="input-label" htmlFor="firstName">Name:</label>
            <input
              type='text'
              name="name"
              id="firstName"
              value={formdata.name}
              onChange={handlChange}
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <span className='error-text'>{errors.name}</span>}
          </div>
          <div className="input-container">
            <label className="input-label" htmlFor="phoneNo">Phone No:</label>
            <input
              type='text'
              name="phoneNo"
              id="phoneNo"
              value={formdata.phoneNo}
              onChange={handlChange}
              className={errors.phoneNo ? 'error' : ''}
            />
            {errors.phoneNo && <span className='error-text'>{errors.phoneNo}</span>}
          </div>
          <div className="input-container">
            <label className="input-label" htmlFor="email">Email:</label>
            <input
              type='email'
              name="email"
              id="email"
              value={formdata.email}
              onChange={handlChange}
            />
          </div>
          <div className="input-container">
            <label className="input-label" htmlFor="password">Password:</label>
            <input
              type='password'
              name="password"
              id="password"
              value={formdata.password}
              onChange={handlChange}
              className={errors.password ? 'error' : ''}
            />
            {errors.password && <span className='error-text'>{errors.password}</span>}
          </div>
          <button type='submit' className="submit-button">Submit</button>
        </form>
        <p>
          Already I have account:- <Link to="/">SignIn</Link>
        </p>
      </div>
    </div>
    </div>
  );
}
