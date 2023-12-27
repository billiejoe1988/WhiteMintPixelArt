import React, { useState, useEffect } from 'react';
import './itemlistcontainer.css';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams ()

  const categoryText = categoryId ? `Welcome to ${categoryId} category` : greeting;

  useEffect (() => {
    setLoading(true)
    
    const collectionRef = categoryId
    ? query(collection(db, 'products'), where('category', '==', categoryId))
    : collection(db, 'products')
   
    getDocs(collectionRef)
    .then(response => {
      const productsAdapted = response.docs.map(doc => {
        const data = doc.data()
        return { id: doc.id, ...data }
      })
      setProducts(productsAdapted)
    })
    .catch(error => {
      console.log(error)
    })
    .finally(() => {
      setLoading(false)
    });

  }, [categoryId]);

  return (
    <ul className='container-fluid pb-5'>
      <h1 className='itemEntrega py-4'>{categoryText}</h1>
      <li className='itemList'>
        <ItemList products ={products} />
      </li>
    </ul>
  )
}

export default ItemListContainer;