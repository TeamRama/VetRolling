import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import "../../../Styles/GeneralStyles.css"

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
                        <Form>
                            <Row>
                                <Col sm={12} className="my-3">
                                    <Form.Group>
                                        <Form.Label>Nombre y Apellido</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder='Ingrese nombre y apellido'>

                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col sm={12} className="my-3">
                                    <Form.Group>
                                        <Form.Label>Email de Contacto</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder='Ingrese email'>

                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col sm={12} className="my-3">
                                    <Form.Group>
                                        <label for="exampleFormControlTextarea1" class="form-label">Ingrese su consulta</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" placeholder='Escriba aqui su consulta' rows="3"></textarea>
                                    </Form.Group>
                                </Col>
                                <div className='text-center'>
                                <button className='btn-reservar text-center  my-2' type='submit' value="send">Enviar</button>
                                </div>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contacto;