import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import flagSpain from '../assets/flagSpain.png';
import flagItaly from '../assets/flagItaly.png';
import flagGB from '../assets/flagGB.png';
import { useTranslation } from 'react-i18next';

export const NavBar = () => {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng:string) => {
      i18n.changeLanguage(lng);
  };

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">NicoPizza</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link className='languages'>
              <img src={flagSpain} alt="" onClick={() => changeLanguage('es')}/>
              <img src={flagItaly} alt="" onClick={() => changeLanguage('it')}/>
              <img src={flagGB} alt="" onClick={() => changeLanguage('en')}/>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
