import React from 'react';
import Item from '../Item/Item.jsx';

const ItemList = ({ products }) => {
  return (
    <div className='ListGroup d-flex flex-wrap justify-content-center'>
      {products.map(prod => <Item key={prod.id} {...prod} />)}
    </div>
  )
}

export default ItemList;