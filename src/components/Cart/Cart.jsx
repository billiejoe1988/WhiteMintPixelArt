import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './Cart.css';
import CartItem from '../CartItem/CartItem';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

  console.log("Total Quantity:", totalQuantity);
  console.log("Total:", total);

  if (totalQuantity === 0) {
    return (
      <div className='bg-black opacity-80 min-height-full'>
        <h1>No items in the cart</h1>
        <Link to='/' className='button m-3'>
          Home
        </Link>
      </div>
    );
  }

  return (
    <section className='bg-black opacity-80 min-height-full'>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <h3>Total: <span className="textos">${total}</span></h3>
      <button onClick={() => clearCart()} className='button m-3'>
        Clear Cart
      </button>
      <Link to='/checkout' className='button m-3'>
        CheckOut
      </Link>
    </section>
  );
};


export default Cart;
