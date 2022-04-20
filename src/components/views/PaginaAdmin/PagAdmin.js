import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./PagAdmin.css";
import "../../../Styles/GeneralStyles.css";
import usuario from '../../Assets/ImgLogin/usuario.png';
import turnos from '../../Assets/ImgLogin/turnos.png';
import consultas from '../../Assets/ImgLogin/consultas.png';

const PagAdmin = () => {
    return (
        <div className='box '>
            <Container className="">
                <div className='Boxadm'>
                    <Card className="text-center">

                        <Card.Body className='opcion1'>
                            <img
                                className="usuario "
                                src={usuario}
                            />
                            <Card.Title>Usuarios Registrados </Card.Title>
                            <Link to="/usuario/tabla" className="btn-reservar text-decoration-none text-center">Usuarios </Link>
                        </Card.Body>

                    </Card>
                    <Card className="text-center">

                        <Card.Body>
                            <img
                                className="turnos "
                                src={turnos}
                            />
                            <Card.Title>Turnos Reservados </Card.Title>

                            <Link to="/turno/tabla" className="btn-reservar text-decoration-none text-center">Turnos </Link>
                        </Card.Body>

                    </Card>
                    <Card className="text-center">

                        <Card.Body>
                            <img
                                className="consultas "
                                src={consultas}
                            />
                            <Card.Title>Consultas Realizadas</Card.Title>

                            <Link to="/PaginaContacto/" className="btn-reservar text-decoration-none text-center">Consultas </Link>
                        </Card.Body>

                    </Card>
                </div>
            </Container>
        </div>
    );
};

export default PagAdmin;