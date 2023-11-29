import React from 'react';
import viteLogo from "/vite.svg";
import reactLogo from "/react.svg";
import bootLogo from "/Bootstraplogo.svg";

const Footer = () => {
    return (
        <div className='flex'>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
          <a href="https://react-bootstrap.netlify.app/">
            <img className="logo" src={bootLogo} alt="logoBoostrap" />
          </a>
          <p className="cierre text-white">
          This web app was created for Mauricio Arbelaiz using React, Vite, and Bootstrap
          </p>
        </div>
    )
  }
  
  export default Footer;