import React from 'react';
import './index.css';

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className='cart-container'>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <div className='empty-cart'>
          <p>Your cart is empty. <a href="/">Shop now</a></p>
        </div>
      ) : (
        <>
        <div className='cart-list'>
            {cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                        <h2 className='cart-product-title'>{item.name}</h2>
                        <p className='cart-total-price'>{item.price}</p>
                        <button className='remove-button' type='button' onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                      ))}
        </div>
        <div className=' btn-container'>
        <button className="place-order-btn">Place Your Order</button>
        </div>
        
        </>
      )}
    </div>
  );
};

export default Cart;
