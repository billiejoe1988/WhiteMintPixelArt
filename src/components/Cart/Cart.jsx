import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './cart.css';
import CartItem from '../CartItem/CartItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

  console.log("Total Quantity:", totalQuantity);
  console.log("Total:", total);

  if (totalQuantity === 0) {
    return (
      <div className='bg-black min-height-full py-5'>
        <h1 className='pb-5'>No items in the cart</h1>
        <Link to='/' className='button m-3'>
          Home
        </Link>
      </div>
    );
  }

  return (
    <section className='bg-black min-height-full py-5'>
      <ul className='p-4'>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
      <h3>Total: <span className="textos pb-5">${total}</span></h3>
      <Link to='/checkout' className='button m-3 p-3 border'>
        CheckOut
      </Link>
      <button
        onClick={() => {
          clearCart();
          Swal.fire({
            title: 'Cart Cleared!',
            text: 'Your cart has been successfully cleared.',
            icon: 'success',
          });
        }}
        className='button m-3 p-2'
      >
        Clear Cart
      </button>
    </section>
  );
};

export default Cart;
