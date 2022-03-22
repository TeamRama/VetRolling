import React from "react";
import { Button, Card } from "react-bootstrap";

const CardProducto = ({imagen, nombre, precio}) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img className="img-fluid" variant="top" src={imagen}></Card.Img>
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>Precio: {precio} </Card.Text>
          <Button variant="warning" className="text-white">Comprar</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardProducto;