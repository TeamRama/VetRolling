import React from "react";
import "../../Styles/GeneralStyles.css";
import { Row, Col, Container } from 'react-bootstrap';
import logo from "../Assets/ImgLogin/Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-dark Margin-top-home">
      <Container className=" mt-5 py-5">
        <Row className="text-center">
          <Col sm={12} md={4}><Link to="/">
            <img className="logoFooter" src={logo}></img></Link>
          </Col>
          <Col sm={12} md={4}>
            <ul className="text-white list-style p-2">A cerca de:
            <li className="p-2"><Link className="text-decoration-none text-white" to="/Planes/Tabbed">Planes</Link></li>
            <li className="p-2"><Link className="text-decoration-none text-white" to="/Servicios/Tabbed">Servicios</Link></li>
            <li className="p-2"><Link className="text-decoration-none text-white" to="/Contacto">Contacto</Link></li>          
            </ul>
          </Col>
          <Col sm={12} md={4}>
            <p className="text-white">Podes encontrarnos en:</p>
            <div>
              <Link to="*">
              <FontAwesomeIcon className='text-white fa-2x p-2' icon={faInstagram}  />
              </Link>
              <Link to="*">
              <FontAwesomeIcon className='text-white fa-2x p-2' icon={faFacebook} />
              </Link>
              <Link to="*">
              <FontAwesomeIcon className='text-white fa-2x p-2' icon={faTwitter} />
              </Link>
              <Link to="*">
              <FontAwesomeIcon className='text-white fa-2x p-2' icon={faTiktok} />
              </Link>
            </div>
            <p className="text-white my-2">Vet Rolling. All rights reserved &copy;</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
