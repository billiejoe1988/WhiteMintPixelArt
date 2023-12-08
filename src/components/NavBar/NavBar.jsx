import React from 'react';
import "./navbar.css";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CartWidget from '../CartWidget/CartWidget';
import LogoMint from '/logoWhiteMint2.png';
import { NavLink, Link } from 'react-router-dom';


const NavBar = () => {

  return (
  <Navbar collapseOnSelect expand="lg" className="bg-black navbar mb-2 mt-0">
    <Container>
    <Link to='/'>
           <img className="logoMint" src={LogoMint} alt="logo" />
        </Link>
        <Navbar.Brand href='/' className='text-white' style={{ fontSize: '18px' }}>WhiteMint Pixel Art</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
        <Nav className="mr-auto my-auto">
            <NavLink to={'/category/boss'} className="nav-link" id='link1'>Bosses</NavLink>
            <NavLink to={'/category/set'} className="nav-link" id='link2'>Game Sets</NavLink>
            <NavLink to={'/category/caracter'} className="nav-link" id='link3'>Caracters</NavLink>
            <NavLink to={'/category/other'} className="nav-link" id='link4'>Others</NavLink>
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