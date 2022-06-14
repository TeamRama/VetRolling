import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { Container, Form, Row, Col } from "react-bootstrap";
import "./PaginaContacto.css";
import "../../../../Styles/GeneralStyles.css";
import Swal from "sweetalert2";
import { validateNombreDueño, validateEmail, } from "../../../helpers/ValidateFields";
import { useNavigate } from "react-router-dom";


const PaginaContacto = () => {

    const [nombreDueño, setNombreDueño] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate()
    const handleClick = () => {
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_sktzuej', 'template_wf5oikv', e.target, 'user_DfiFfXrlbOM3tOLWjQzRU')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        if (
            !validateNombreDueño(nombreDueño) ||
            !validateEmail(email) 
        ) {
            Swal.fire("Datos Incorrectos !", "Intenta Nuevamente.", "error");
            return;
        } else {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Su consulta fue realizada con exito.',
                showConfirmButton: false,
                timer: 3000
            })
        }
        navigate("/");
    };
    return (
        <div>

            <Container>
                <h1 className="fw-bold">Consulta por tu plan!</h1>
                <hr  />
                {/* Form Contacto */}
                <div className='Form-Contacto px-5'>
                <Form  onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={12} className="my-3">
                                    <Form.Group>
                                        <Form.Label>Nombre y Apellido</Form.Label>
                                        <Form.Control
                                          className="imputcontacto"
                                          type="text"
                                          placeholder=" Nombre Completo"
                                          name="nombreCompleto"
                                          onChange={({ target }) => setNombreDueño(target.value)}>

                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col sm={12} className="my-3">
                                    <Form.Group>
                                        <Form.Label>Email de Contacto</Form.Label>
                                        <Form.Control
                                            className="imputcontacto"
                                            type="Email"
                                            placeholder="Correo Electronico"
                                            name="email"
                                            onChange={({ target }) => setEmail(target.value)}>

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
                                <button 
                                className='btn-reservar text-center 
                                 my-2'
                                  type='submit' 
                                  value="send"
                                  onClick={handleClick}>Enviar</button>
                                </div>
                            </Row>
                        </Form>
                </div>
            </Container>
        </div>
    );
};

export default PaginaContacto;