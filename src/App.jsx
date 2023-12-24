import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import RouterMain from './routers/RouterMain';
import Home from './components/home/Home';
import Sidebar from './components/sidebar/Sidebar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
     <main>
       <RouterMain />
     </main>
     <footer>
          <Home />
          <Sidebar />
          <Footer />
     </footer>
    </>
  );
}

export default App;
