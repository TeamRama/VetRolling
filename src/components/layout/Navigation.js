import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import {Link} from "react-router-dom";
import logo from "../Assets/ImgLogin/logo3nav.png";
import "../../Styles/GeneralStyles.css";

const Navigation = () => {
  return (
    <div>
      <Navbar className="navbar" expand="lg">
        <Container>
          <Navbar.Brand className="logo" href="/">
          Vet Rolling
          <img className="imglogo px-4" src={logo}/>
          </Navbar.Brand>
          <Navbar.Toggle className='btn-burger' aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="navbarra"  id="basic-navbar-nav">
            <Nav className="ms-auto color-nav">
              <Link className="nav-link na mx-3  text-decoration-none text-center" to="/" >Inicio</Link>
              <Link  className="nav-link na mx-3  text-decoration-none text-center" to="*">Servicios</Link>
              <Link  className="nav-link na mx-3  text-decoration-none text-center" to="/SobreNosotros">Sobre nosotros</Link>
              <Link  className="btn-registro mx-5  text-decoration-none text-center" to="/Login">Login</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
