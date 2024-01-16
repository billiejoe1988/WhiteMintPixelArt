import React, { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount.jsx';
import './itemdetail.css';
import { Link, NavLink } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  const hangleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    const item = {
      id, name, price, img
    };
    addItem(item, quantity);
  }

  return (
    <section className='d-flex justify-content-center align-items-center h-50'>
      <article className='CardItem w-60 mx-auto custom-max-width'>
        <header className='Header'>
          <h2 className='ItemHeader'>
            {name}
          </h2>
        </header>
        <div className="d-flex justify-content-center">
          <img
            src={img}
            alt={name}
            className='ItemImgDet w-100 rounded'
            style={{ width: '300px', height: '300px' }}
          />
        </div>
        <section className='p-4'>
          <p className='Info'>
            Category: <span className='textos'>{category}</span>
          </p>
          <p className='Info'>
            Description: <span className='textos'>{description}</span>
          </p>
          <p className='Info'>
            Price: <span className='textos'>${price}</span>
          </p>
        </section>
        <footer className='ItemFooterDetail'>
          {
            quantityAdded > 0 ? (
              <>
                <Link to='/cart' className='button m-3 textos border'>
                  Proceed to checkout
                </Link>
                <NavLink to='/' className='button m-3 text-white'>Add More</NavLink>
              </>
            ) : (
              <ItemCount initial={1} stock={stock} onAdd={hangleOnAdd} />
            )
          }
        </footer>
      </article>
    </section>
  );
};

export default ItemDetail;
