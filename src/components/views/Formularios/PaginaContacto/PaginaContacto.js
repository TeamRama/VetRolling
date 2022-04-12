import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { Container, Form, Row, Col } from "react-bootstrap";
import "./PaginaContacto.css";
import "../../../../Styles/GeneralStyles.css";
import Swal from "sweetalert2";
import { validateNombreDueño, validateEmail, validateCelular, validatePlan } from "../../../helpers/ValidateFields";
import { useNavigate } from "react-router-dom";

const PaginaContacto = () => {


    const [nombreDueño, setNombreDueño] = useState("");
    const [email, setEmail] = useState("");
    const [celular, setCelular] = useState("");
    const [plan, setPlan] = useState("");


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
      e.target.reset()
      alert("Mensaje enviado");

    if (
        !validateNombreDueño(nombreDueño) ||
        !validateEmail(email) ||
        !validateCelular(celular) ||
        !validatePlan(plan)


    ) {
        Swal.fire("Datos Incorrectos !", "Intenta Nuevamente.", "error");
        return;
    }
    navigate("/");
};

return (
    <div>
        <Container className="py-5 DatosContacto">
            <h1>Quiero Informacion ! </h1>
            <hr />
            {/* Form Contacto */}
            <div className='Form-Contacto'>
                <Form className="p-3 m-3" onSubmit={handleSubmit}>
                    <Row ClassName='RowContacto' >
                        <Col md={6}>
                            <Form.Group className="my-3  groupcontacto" controlId="formBasicEmail"
                            >
                                <Form.Label>Nombre y Apellido</Form.Label>
                                <Form.Control
                                    className="imputcontacto"
                                    type="text"
                                    placeholder=" Nombre Completo"
                                    name="nombreCompleto"
                                    onChange={({ target }) => setNombreDueño(target.value)} />

                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="my-3 groupcontacto" controlId="formBasicPassword">
                                <Form.Label>Email de Contacto </Form.Label>
                                <Form.Control
                                    className="imputcontacto"
                                    type="Email"
                                    placeholder="Correo Electronico"
                                    name="email"
                                    onChange={({ target }) => setEmail(target.value)} />

                            </Form.Group>
                        </Col>
                        <Col md={6}>

                            <Form.Group className="my-3 groupcontacto" controlId="formBasicPassword">
                                <Form.Label>Celular de Contacto</Form.Label>
                                <Form.Control
                                    className="imputcontacto"
                                    type="tel"
                                    placeholder="Celular de Contacto"
                                    name="celular"
                                    onChange={({ target }) => setCelular(target.value)}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="my-3 groupcontacto" controlId="formBasicCheckbox">
                                <Form.Label>Tipo de Plan</Form.Label>
                                <Form.Select
                                    className="imputcontacto"
                                    name="plan"
                                    onChange={({ target }) => setPlan(target.value)}
                                >
                                    <option value="">Me interesa el Plan </option>
                                    <option value="cachorro">Primeros Pasos</option>
                                    <option value="maduro">Madurando</option>
                                    <option value="adulto">Adulto</option>

                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <div className="text-end">
                            <button className="btn-reservar"
                                type="submit" value="Send"
                                onClick={handleClick} >
                                Enviar Email</button>
                        </div>
                    </Row>
                </Form>
            </div>
        </Container>
    </div>
);
};

export default PaginaContacto;