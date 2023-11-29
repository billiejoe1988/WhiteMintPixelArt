import React, { useEffect, useState } from 'react';
import "./home.css";
import perfil from "/mauripixelart.jpeg";

const Home = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const fullTitle = "I'm Mauri";
  const fullText = "I'm passionate about games, programming, music, cooking and pitbull dogs. I've had the opportunity to bring my hobby, pixel art, to life by contributing to the development of some indie games with my artwork, including backgrounds. I realized that there was a need for this art form. Below, I've provided a gallery of my work for you to explore this exciting world. If you have any questions, feel free to contact me using the button below.";

  useEffect(() => {
    animateText(fullTitle, setTitle, () => {
      animateText(fullText, setText);
    });
  }, []);

  const animateText = (fullText, setTextFunction, callback) => {
    let i = 0;
    const speed = 60;

    const typeText = () => {
      if (i < fullText.length) {
        setTextFunction(fullText.substring(0, i + 1)); 
        i++;
        setTimeout(typeText, speed);
      } else {
        if (typeof callback === 'function') {
          callback(); 
        }
      }
    };

    typeText();
  };

  return (
    <div className='presentacion row py-4 my-4'>
      <div className='col-md-6'>
        <h1 className='pt-3 im'>{title}</h1>
        <p>{text}</p>
      </div>
      <div className='col-md-6 rounded'>
        <img className="perfil" src={perfil} alt="perfil" />
      </div>
    </div>
  );
}

export default Home;
