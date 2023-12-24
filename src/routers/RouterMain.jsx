import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import Cart from '../components/Cart/Cart';
import CheckOut from '../components/CheckOut/CheckOut';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';

import { CartProvider } from '../context/CartContext';

const RouterMain = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <ToastContainer />
        <Routes>
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<CheckOut />} />
          <Route path='/' element={<ItemListContainer greeting="Welcome to the magical world of pixel art !!!" />} />
          <Route path='*' element={<h1>404 NOT FOUND</h1>} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default RouterMain;
