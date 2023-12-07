import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/home/Home';
import Sidebar from './components/sidebar/Sidebar';
import Footer from './components/footer/Footer';
import Gallery from './components/gallery/Gallery';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <div className="container-fluid">
      <BrowserRouter >
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Welcome to the magical world of pixel art !!!" />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='#' element={<h1>404 NOT FOUND</h1>} />
        </Routes>
        <Home />
        <Gallery />
        <Sidebar />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;