import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./home.css";
import "../../../Styles/GeneralStyles.css"
import { Link } from "react-router-dom";

const InformacionGralHome = () => {
  return (
    <div>
      <Container>
        <Row className="container mb-5">
          <Col sm={12} md={4}>
            <h2 className="text-warning fw-bold text-center">
              Tu Clinica Veterinaria de confianza en Tucuman
            </h2>
          </Col>
          <Col sm={12} md={8} className="text-center lead text-black">
            <p>
              En Clínica Veterinaria Rolling, contamos con el mejor equipo tanto humano como técnico
              para proporcionarle a tu mascota una atención veterinaria de la
              máxima calidad.
            </p>
            <Link to="/Contacto" className="btn-reservar text-decoration-none" >Contactanos</Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InformacionGralHome;
