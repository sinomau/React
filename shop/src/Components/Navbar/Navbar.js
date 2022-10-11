import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget';
import logo from './assets/img/3d.svg'
import {Link} from 'react-router-dom'

const NavBar = () =>{
    return (
    <nav>
    <Navbar bg="light" expand="lg">
      <Container>
        <div class="container__logo">
          <Link to='/'><img class="logo" src={logo} alt="logo" /></Link>
          <h2>Plain</h2>
        </div>
        <Navbar.Brand href="#home"></Navbar.Brand >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Button variant="outline-dark">Inicio</Button>
            <Button variant="outline-dark">Contacto</Button>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <Button variant="outline-dark">Figuras 3D</Button>
              <Button variant="outline-dark">Gadgets 3D</Button>
              <Button variant="outline-dark">Juegos 3D</Button>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
       < CartWidget />
      </Container>
    </Navbar>
    </nav>
    )
    }

    export default NavBar;