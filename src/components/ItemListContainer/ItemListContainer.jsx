import React, { useState, useEffect } from 'react';
import './itemlistcontainer.css';
import { getProducts, getProductsByCategory } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting}) => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams ()
  const categoryText = categoryId ? `Welcome to ${categoryId} category` : greeting;

  useEffect (() => {
    const asyncFunc = categoryId ? getProductsByCategory : getProducts

    asyncFunc (categoryId)
    .then(response => {
      setProducts(response)
     })
     .catch(error => {
      console.error(error)
     })
  }, [categoryId])

  return (
    <div className='container-fluid'>
      <h1 className='itemEntrega py-4'>{categoryText}</h1>
      <div className='itemList'>
         <ItemList products ={products} />
      </div>
    </div>
  )
}

export default ItemListContainer;