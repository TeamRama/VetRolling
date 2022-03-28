import React from "react";
import "../../Styles/GeneralStyles.css";
import { Row, Col } from 'react-bootstrap';
import logo from "../Assets/ImgLogin/Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";

const Footer = () => {
  return (

    <div className="footer">


      <div className='main-Ftr'>
        <Row ClassName='mt-5'>
          <Col className='px-5 pt-4 f1' sm={12} md={4}>
            <img className="logoFooter pt-3"
              src={logo} />
          </Col>
          <Col className=' px-5 pt-5  f2' sm={12} md={4} >
             <p className=" fs-5 Acercade ">Acerca de : </p>
             <li className="nav-item pb-3">
             <Link to="/PaginaPlanes" className="temas text-decoration-none text-center">Planes  </Link> </li>
              <li className="nav-item pb-3 ">
              <Link to="*" className="temas text-decoration-none text-center">Pet Shop </Link> </li>
              <li className="nav-item pb-3 ">
              <Link to="*" className="temas text-decoration-none text-center">Guarderia Mascotera </Link> </li>
              <li className="nav-item pb-3 ">
              <Link to="PaginaContacto" className="temas text-decoration-none text-center">Contacto </Link></li>
          </Col>
          <Col className='px-5 pt-5  f3' sm={12} md={4}>
          <p className=" fs-5 Acercade ">Puedes encontrarnos en: </p>
              <div className='fontAIconL'>
                <FontAwesomeIcon to="/PaginaContacto" className='IconL p-3 ' icon={faInstagram}  />
                <FontAwesomeIcon className='IconL p-3' icon={faFacebook} />
                <FontAwesomeIcon className='IconL p-3' icon={faTwitter} />
                <FontAwesomeIcon className='IconL p-3' icon={faTiktok} />
              </div>
              <p className="my-5 fs-5 text-center  copyr">
              Vet Rolling. All rights reserved &copy;
            </p>
          </Col>

        </Row>
      </div>

    </div>


  );
};

export default Footer;
