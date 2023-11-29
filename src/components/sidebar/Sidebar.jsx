import { useState } from 'react';
import "./sidebar.css";
import Offcanvas from 'react-bootstrap/Offcanvas';
import SideForm from './Form';
import contactUS from "/gifAhogueraDS.gif";

function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='flex'>
        <img className="logoMint rounded" src={contactUS} alt="contacto" onClick={handleShow}/>
        <p className='contact'>Contact Us</p>
      </div>
      <Offcanvas className="bg-black c" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='text-white hover-underline pb-4 pt-3'>Contact Us</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='text-white textoContact textContact'>
          Do you have a proposal in mind, or are you interested in working together on your next video game? 
          Perhaps you're looking to purchase a specific package or image, or you have a 
          request for custom artwork. Feel free to leave your message, and let's discuss how we can 
          collaborate and bring your ideas to life.
        </Offcanvas.Body>
        <SideForm />
      </Offcanvas>
    </>
  );
}

export default Sidebar;