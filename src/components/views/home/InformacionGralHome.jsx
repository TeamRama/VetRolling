import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../style/home.css";

const InformacionGralHome = () => {
  return (
    <div>
      <Container>
        <Row className="container my-5">
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
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InformacionGralHome;
