import React from 'react';
import viteLogo from "/vite.svg";
import reactLogo from "/react.svg";
import bootLogo from "/Bootstraplogo.svg";
import fireLogo from "/firebase.svg";
import Home from '../home/Home';
import Sidebar from '../sidebar/Sidebar'

const Footer = () => {
    return (
      <section>
         <Sidebar />
         <Home />
          <div className='flex'>
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="ViteLogo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="ReactLogo" />
            </a>
            <a href="https://react-bootstrap.netlify.app/">
              <img className="logo" src={bootLogo} alt="logoBoostrap" />
            </a>
            <a href="https://firebase.google.com/">
              <img className="logo" src={fireLogo} alt="logoFireBase" />
            </a>
            <p className="cierre text-white">
              This web app was created for Mauri Arbelaiz using React, Vite, FireBase and Bootstrap
            </p>
          </div>
        </section>
    )
  }
  
  export default Footer;