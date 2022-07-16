import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
    return(
    <>    
  <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><img src="./assets/logo.png" alt="logo BeautyShop" height="100" width="250"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '50px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Inicio</Nav.Link>
            <Nav.Link href="#action2">Novedades</Nav.Link>
            <NavDropdown title="Productos" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Perfumes</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">
                Maquillaje
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Skin Care
              </NavDropdown.Item>
            </NavDropdown>
           
          </Nav>
          
        </Navbar.Collapse>
        
        
      </Container>
    </Navbar>
    <Navbar bg="light" expand="lg">
      <Container fluid>
       

        
      </Container>
    </Navbar>
</>
            
       
    )
}

export default NavBar