import React from 'react'
import { Link } from 'react-router-dom'; 
import './item.css'

const Item = ({ id, name, img, price, stock }) => {

  return (
    <article className='CardItem p-4 border p-2 m-2 sm-col-3 shadowMan bg-black opacity rounded'>
      <header className='Header'>
        <h2 className='ItemHeader'>
          {name}
        </h2>
      </header>
      <picture>
        <img src={img} alt={name} className='ItemImg rounded' />
      </picture>
      <section>
        <p className='Info py-2'>
          Price: <span className='textos'>${price}</span>
        </p>
        <p className='Info'>
          Stock: <span className='textos'>{stock}</span>
        </p>
      </section>
      <footer className='ItemFooter'>
        <Link to={`/item/${id}`} className='Option'>View details</Link>
      </footer>
    </article>
  )
}

export default Item;
