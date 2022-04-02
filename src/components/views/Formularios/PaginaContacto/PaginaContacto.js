import React from 'react';
import emailjs from '@emailjs/browser';
import { Container, Form, Row, Col } from "react-bootstrap";

import "./PaginaContacto.css";
import "../../../../Styles/GeneralStyles.css";





const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_id', 'template_id', 'user_id')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};


const PaginaContacto = () => {
    return (
        <div>
            <Container className="py-5 DatosContacto">
                <h1>Quiero Informacion ! </h1>
                <hr />
                {/* Form Contacto */}
                <div className='Form-Contacto'>
                    <Form className="p-3 m-3"  onSubmit={sendEmail}>
                        <Row ClassName='RowContacto' >
                            <Col md={6}>
                                <Form.Group className="my-3  groupcontacto" controlId="formBasicEmail"
                                >
                                    <Form.Label>Nombre y Apellido</Form.Label>
                                    <Form.Control
                                        className="imputcontacto"
                                        type="text"
                                        placeholder=" Nombre Completo"
                                        name="NombreCompleto" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="my-3 groupcontacto" controlId="formBasicPassword">
                                    <Form.Label>Email de Contacto </Form.Label>
                                    <Form.Control
                                        className="imputcontacto"
                                        type="Email"
                                        placeholder="Correo Electronico"
                                        name="Email" />

                                </Form.Group>
                            </Col>
                            <Col md={6}>

                                <Form.Group className="my-3 groupcontacto" controlId="formBasicPassword">
                                    <Form.Label>Celular de Contacto</Form.Label>
                                    <Form.Control
                                        className="imputcontacto"
                                        type="tel"
                                        placeholder="Celular de Contacto"
                                        name="Celular" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="my-3 groupcontacto" controlId="formBasicCheckbox">
                                    <Form.Label>Provincia y Localidad </Form.Label>
                                    <Form.Control
                                        className="imputcontacto"
                                        type="text"
                                        placeholder="Provincia - Localidad"
                                        name="Provincia" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="my-3 groupcontacto" controlId="formBasicEmail">
                                    <Form.Label>Domicilio</Form.Label>
                                    <Form.Control
                                        className="imputcontacto"
                                        type="text"
                                        placeholder=" Calle y Numeracion"
                                        name="Domicilio" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="my-3 groupcontacto" controlId="formBasicCheckbox">
                                    <Form.Label>Tipo de Plan</Form.Label>
                                    <Form.Select
                                        className="imputcontacto"
                                        name="Plan">
                                        <option value="">Me interesa el Plan </option>
                                        <option value="cachorro">Primeros Pasos</option>
                                        <option value="maduro">Madurando</option>
                                        <option value="adulto">Adulto</option>

                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <div className="text-end">
                            <input type="submit" value="Send" />
                            </div>
                        </Row>
                    </Form>
                </div>
            </Container>
        </div>
    );
};

export default PaginaContacto;