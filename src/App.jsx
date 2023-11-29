import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import Sidebar from './components/sidebar/Sidebar.jsx';
import Footer from './components/footer/Footer.jsx';
import Home from './components/home/Home.jsx';

function App() {

  return (
    <div className="container-fluid">
      <NavBar />
      <ItemListContainer greeting="Welcome to the magical world of pixel art !!!" />
      <Home />
      <Sidebar />
      <Footer />
    </div>
  );
}


export default App;
