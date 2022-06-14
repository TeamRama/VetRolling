import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import "../../../Styles/GeneralStyles.css"
import { validateNombreDueño, validateEmail, validateConsulta } from "../../helpers/ValidateFields";

const Contacto = () => {
    //states
    const [nombreApellido, setNombreApellido] = useState("");
    const [email, setEmail] = useState("");
    const [consulta, setConsulta] = useState("");

    const URL = process.env.REACT_APP_API_CONSULTA;

    //navigate
    const navigate = useNavigate();

    //guardar los datos

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            !validateNombreDueño(nombreApellido) ||
            !validateEmail(email) ||
            !validateConsulta(consulta)) {
            Swal.fire("Ops!", " Datos incorrectos .", "error");
            return;
        }
        // Enviar los datos para guardarlos 
        const newConsulta = {
            nombreApellido,
            email,
            consulta
        }
        Swal.fire({
            title: '¿Realizar consulta?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Enviar',
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await fetch(URL, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(newConsulta)
                    });
                    if (res.status === 201) {
                        Swal.fire('Consulta enviada!', ' Gracias por su consulta, aguarde respuesta.', 'success');
                        navigate("/");
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        });
    }


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
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={12} className="my-3">
                                    <Form.Group>
                                        <Form.Label>Nombre y Apellido</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder='Ingrese nombre y apellido'
                                            onChange={({ target }) => setNombreApellido(target.value)}>                                            
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col sm={12} className="my-3">
                                    <Form.Group>
                                        <Form.Label>Email de Contacto</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder='Ingrese email'
                                            onChange={({ target }) => setEmail(target.value)}>
                                            
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col sm={12} className="my-3">
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Example textarea</Form.Label>
                                        <Form.Control as="textarea" rows={3} 
                                        onChange={({ target }) => setConsulta(target.value)}/>
                                    </Form.Group>
                                </Col>
                                <div className='text-center'>
                                    <button className='btn-reservar text-center  my-2' value="send">Enviar</button>
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