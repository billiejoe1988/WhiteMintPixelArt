import React from 'react';
import ItemCount from '../ItemCount/ItemCount.jsx';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  return (
    <div className='d-flex justify-content-center align-items-center h-50'>
      <article className='CardItem  w-60mx-auto custom-max-width'>
        <header className='Header'>
          <h2 className='ItemHeader'>
            {name}
          </h2>
        </header>
        <div className="d-flex justify-content-center">
          <img src={img} alt={name} className='ItemImgDet w-100 rounded' />
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
          <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)} />
        </footer>
      </article>
    </div>
  );
}

export default ItemDetail;