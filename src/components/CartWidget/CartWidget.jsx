import React, { useContext } from 'react';
import cartIcon from "/carrito.png";
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext)

  return (
    <Link to='/cart' className='CartWidget flex' style={{display: totalQuantity > 0 ? 'block' : 'none'}}>
        <img className="logoMint" src={cartIcon} alt="cart-widget" />
        { totalQuantity }
    </Link>
  )
}

export default CartWidget;