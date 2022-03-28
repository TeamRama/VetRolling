import React from 'react';
import { Container, Form, Row , Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./PaginaContacto.css";
import "../../../../Styles/GeneralStyles.css";




const PaginaContacto = () => {
    return (
        <div>
            <Container className="py-5 DatosContacto">
                <h1>Quiero Informacion ! </h1>
                <hr />
                {/* Form Contacto */}
                <div className='Form-Contacto'>
                    <Form className="p-3 m-3">
                        <Row ClassName='RowContacto' >
                            <Col md={6}>
                                <Form.Group className="my-3  groupcontacto" controlId="formBasicEmail">
                                    <Form.Label>Nombre y Apellido</Form.Label>
                                    <Form.Control
                                        className="imputcontacto"
                                        type="text"
                                        placeholder=" Nombre Completo" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="my-3 groupcontacto" controlId="formBasicPassword">
                                    <Form.Label>Email de Contacto </Form.Label>
                                    <Form.Control
                                        className="imputcontacto"
                                        type="Email"
                                        placeholder="Correo Electronico " />

                                </Form.Group>
                            </Col>
                            <Col md={6}>

                                <Form.Group className="my-3 groupcontacto" controlId="formBasicPassword">
                                    <Form.Label>Celular de Contacto</Form.Label>
                                    <Form.Control
                                        className="imputcontacto"
                                        type="tel"
                                        placeholder="Celular de Contacto" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="my-3 groupcontacto" controlId="formBasicCheckbox">
                                    <Form.Label>Provincia y Localidad </Form.Label>
                                    <Form.Control
                                        className="imputcontacto"
                                        type="text"
                                        placeholder="Provincia - Localidad" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="my-3 groupcontacto" controlId="formBasicEmail">
                                    <Form.Label>Domicilio</Form.Label>
                                    <Form.Control
                                        className="imputcontacto"
                                        type="text"
                                        placeholder=" Calle y Numeracion" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="my-3 groupcontacto" controlId="formBasicCheckbox">
                                    <Form.Label>Tipo de Plan</Form.Label>
                                    <Form.Select className="imputcontacto" >
                                        <option value="">Me interesa el Plan </option>
                                        <option value="cachorro">Primeros Pasos</option>
                                        <option value="maduro">Madurando</option>
                                        <option value="adulto">Adulto</option>

                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <div className="text-end">
                                <Link to="/PaginaContacto" className="btn-reservar text-decoration-none text-center"> Me Interesa </Link>

                            </div>
                        </Row>
                    </Form>
                </div>
            </Container>
        </div>
    );
};

export default PaginaContacto;