import { useState } from 'react';
import { Nav, Navbar, Container  } from 'react-bootstrap';
import flagSpain from '../assets/flagSpain.png';
import flagItaly from '../assets/flagItaly.png';
import flagGB from '../assets/flagGB.png';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPizzaSlice, faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { CarItems } from './CarItems';

export const NavBar = () => {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng:string) => {
      i18n.changeLanguage(lng);
  };

  const [modalShow, setModalShow] = useState(false);

  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" fixed="top" >
      <Container>
        <Navbar.Brand href="#home">
          <div className='brand__container'>          
            <FontAwesomeIcon icon={faPizzaSlice} className="icon__container-image"/>
            <p>NicoPizza</p>
          </div>
          <p>DELICIOUS</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="#ourServices_section" eventKey="1">Home</Nav.Link>
            <Nav.Link href="#stadistics_section" eventKey="2">Link</Nav.Link>
            <Nav.Link className='languages' eventKey="3">
              <img src={flagSpain} alt="" onClick={() => changeLanguage('es')}/>
              <img src={flagItaly} alt="" onClick={() => changeLanguage('it')}/>
              <img src={flagGB} alt="" onClick={() => changeLanguage('en')}/>
            </Nav.Link>
            <Nav.Link href="#link" eventKey="3">
              <FontAwesomeIcon icon={faCartShopping} onClick={() => setModalShow(true)}/>
              <CarItems show={modalShow} onHide={() => setModalShow(false)} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
