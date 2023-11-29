import React from 'react';
import './itemlistcontainer.css';

const ItemListContainer = ({ greeting}) => {
  return (
    <div className='itemEntrega'>{greeting}</div>
  )
}

export default ItemListContainer;