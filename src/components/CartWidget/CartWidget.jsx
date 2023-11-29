import React from 'react';
import cartIcon from "/carrito.png";

const CartWidget = () => {
  return (
    <div className='flex'>
        <img className="logoMint" src={cartIcon} alt="carrito" />
        0
    </div>
  )
}

export default CartWidget;