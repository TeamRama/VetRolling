import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../../../style/home.css"

const CardPlan = ({ imagen, nombre, descripcion }) => {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={12} md={6}>
            <img
              className="img-fluid img-sombra"
              src={imagen}
              alt="cachorros"
            ></img>
          </Col>
          <Col sm={12} md={6} className="mt-2">
            <h3 className="text-warning fw-bold">{nombre}</h3>
            <p className="lead">{descripcion}</p>
            <Button className="bg-warning">Seguir leyendo</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CardPlan;