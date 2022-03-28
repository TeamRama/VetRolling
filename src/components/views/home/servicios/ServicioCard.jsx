import React from 'react';
import { Card, Col, Button} from "react-bootstrap";

const ServicioCard = ({ servicios }) => {
    return (
             <Col sm={12} md={12} lg={4} className="d-flex justify-content-center my-5">
            <Card style={{ width: "18rem" }}>
              <img src={servicios.servicioImg} alt="asd"></img>
              <Card.Body>
                <Card.Title className='text-dark'>{servicios.servicioTitle}</Card.Title>
                <Card.Text className='text-dark'>{servicios.servicioText}</Card.Text>
                
              </Card.Body>
              <div className='d-flex justify-content-end m-3'>
              <Button variant="warning" className='text-white'>Mas informacion</Button>
              </div>
            </Card>
          </Col>
    );
};

export default ServicioCard;