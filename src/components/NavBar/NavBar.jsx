import React from 'react';
import "./navbar.css";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CartWidget from '../CartWidget/CartWidget';
import LogoMint from '/logoWhiteMint2.png';


const NavBar = () => {

  return (
  <Navbar collapseOnSelect expand="lg" className="bg-black navbar mb-2 mt-0">
    <Container>
      <img className="logoMint" src={LogoMint} alt="logo" />
      <Navbar.Brand href="#home" className='text-white' style={{ fontSize: '18px' }}>WhiteMint Pixel Art</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
          <Nav className='mx-auto'>
              <a href="#"><button className="nav-link" id='link1'>Bosses</button></a>
              <a href="#"><button className="nav-link" id='link2'>Sets Games</button></a>
              <a href="#"><button className="nav-link" id='link3'>Caracters</button></a>
              <a href="#"><button className="nav-link" id='link4'>Others</button></a>
          </Nav>
          <Navbar.Text className='text-white'>
            Signed in as: <a href="#login" id="spanNick">BillieJoe</a>
          </Navbar.Text>
        <CartWidget className='my-auto'/>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar;