import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import RouterMain from './routers/RouterMain';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
     <main >
       <RouterMain />
     </main>
     <footer className='pt-5'>
          <Footer />
     </footer>
    </>
  );
}

export default App;
