import { useState } from 'react';
import './App.css';
import { Button, Navbar } from 'react-bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Content from './Components/Content';


function App() {
  return (
    <>
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-dark">
      <Container>
        <Navbar.Brand href="#home" style={{color:'white'}}>Cars 24</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto text-white">
            <Nav.Link href="#features" className='text-white'>Features</Nav.Link>
            <Nav.Link href="#pricing" className='text-white'>Pricing</Nav.Link>
            <Nav.Link href="#pricing" className='text-white'>New</Nav.Link>
            <Nav.Link href="#pricing" className='text-white'>Exchange</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets" className='text-white'>More Products</Nav.Link>
            <Nav.Link eventKey={2}  className='text-white' href="#memes">
              Dank Themes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar></div>
    <Content />
    </>
  );
}

export default App;
