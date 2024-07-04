import React, { useState, useEffect } from 'react';
import { ClipLoader } from 'react-spinners';
import './index.css';

const Cart = ({ cartItems, removeFromCart }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Set the delay as needed
  }, [cartItems]);

  return (
    <div className='cart-container'>
      <h2>Your Cart</h2>
      {loading ? (
        <div className="loader-container">
          <ClipLoader color="#007BFF" loading={loading} size={50} />
        </div>
      ) : (
        <>
          {cartItems.length === 0 ? (
            <div className='empty-cart'>
              <p>Your cart is empty. <a href="/">Shop now</a></p>
            </div>
          ) : (
            <>
              <div className='cart-list'>
                {cartItems.map(item => (
                  <div key={item.id} className="cart-item">
                    <img src={item.thumbnail} alt={item.title} className="cart-product-image" />
                    <div className="cart-item-details">
                      <h2 className='cart-product-title'>{item.title}</h2>
                      <p className='cart-total-price'>₹{item.price}</p>
                    </div>
                    <button className='remove-button' type='button' onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                ))}
              </div>
              <div className='btn-container'>
                <button className="place-order-btn">Place Your Order</button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
