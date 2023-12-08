import React, { useState, lazy, Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/home/Home';
import Sidebar from './components/sidebar/Sidebar';
import Footer from './components/footer/Footer';
import Gallery from './components/gallery/Gallery';
const ItemListContainer = lazy(() => import('./components/ItemListContainer/ItemListContainer'));
const ItemDetailContainer = lazy(() => import('./components/ItemDetailContainer/ItemDetailContainer'));

function App() {
  return (
    <React.Fragment>
      <BrowserRouter >
        <NavBar />
        <Suspense fallback={<div className="spinner" />}>
          <Routes>
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='/' element={<ItemListContainer greeting="Welcome to the magical world of pixel art !!!" />} />
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </Suspense>
        <Home />
        <Gallery />
        <Sidebar />
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default React.memo(App);