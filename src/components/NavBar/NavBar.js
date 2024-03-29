import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget'
import {Link} from 'react-router-dom'
const NavBar = () => {
    return(
    <>    
  <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/"><img src="./assets/logo.png" alt="logo BeautyShop" height="90" width="180"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '50px' }}
            navbarScroll
          >
            <Nav.Link href="/" className="underline">Inicio</Nav.Link>
            <Nav.Link href="#action2" className="underline">Novedades</Nav.Link>
            {/* <NavDropdown href="/productos" title="Productos" id="navbarScrollingDropdown" >
              <NavDropdown.Item href="#action3">Perfumes</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">
                Maquillaje
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                SkinCare
              </NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="/contacto" className="underline">Contacto</Nav.Link>
            
         
           
            
       
          </Nav>
          <Link to="/cart"><CartWidget className="justify-content-end"/></Link>
        </Navbar.Collapse>
        
        
      </Container>
    </Navbar>
   
</>
            
       
    )
}

export default NavBar