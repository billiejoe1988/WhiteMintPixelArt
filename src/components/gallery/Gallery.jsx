import React from 'react';
import "./gallery.css";
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

function Gallery() {
  return (
    <Nav className="flex p-3" variant="underline">
      <Nav.Item>
        <NavLink to='/category/boss'>Bosses</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to='/category/set'>Game Sets</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to='/category/caracter'>Characters</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to='/category/other'>Others</NavLink>
      </Nav.Item>
    </Nav>
  );
}

export default Gallery;