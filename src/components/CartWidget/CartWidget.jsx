import React, { useContext } from 'react';
import cartIcon from "/carrito.png";
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  const { cart, totalQuantity } = useContext(CartContext)

  return (
    <Link to='/cart' className='CartWidget d-flex align-items-center'>
        <img className="logoMint" src={cartIcon} alt="cart-widget" />
        {cart.length !== 0 && <p className="m-0 ml-2">{totalQuantity}</p>}
    </Link>
  )
}

export default CartWidget;