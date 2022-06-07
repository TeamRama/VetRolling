import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../home.css"
import "../../../../Styles/GeneralStyles.css"

const CardPlan = ({ imagen, nombre, descripcion }) => {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={12} md={12} lg={6}>
            <img
              className="img-fluid img-sombra"
              src={imagen}
              alt="cachorros"
            ></img>
          </Col>
          <Col sm={12} md={12} lg={6} className="mt-2">
            <h3 className="text-warning fw-bold">{nombre}</h3>
            <p className="lead">{descripcion}</p>
            <Link className="btn-reservar text-decoration-none" to="/PlanesTabbed">Descubre Nuestros Planes</Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CardPlan;