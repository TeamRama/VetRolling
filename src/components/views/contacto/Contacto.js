 import React from 'react';
import { Col, Container,  Row } from 'react-bootstrap';
import "../../../Styles/GeneralStyles.css"
import FormContacto from './FormContacto';

const Contacto = () => {

    return (
        <div>
            <h1 className='display-5 my-5 text-center fw-bold text-warning'>Veterinaria Rolling</h1>
            <Container>
                <Row>
                    <Col sm={12} md={6}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14240.408879082126!2d-65.2072018!3d-26.8367009!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1654873629323!5m2!1ses-419!2sar" className='w-100' height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </Col>
                    <Col sm={12} md={6}>
                        <h2 className='text-center my-2'>Contactanos!</h2>
                        <FormContacto></FormContacto>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contacto;