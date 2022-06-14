import React, { useEffect } from 'react';
import { Container, Card } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import "./PagAdmin.css";
import "../../../Styles/GeneralStyles.css";
import usuarios from '../../Assets/ImgLogin/gato1.jpg';
import turnos from '../../Assets/ImgLogin/perro1.jpg';
// import consultas from '../../Assets/ImgLogin/conejo1.jpg';



const PagAdmin = () => {

    const redirect = useNavigate();
    const session = JSON.parse(sessionStorage.getItem("stateSession")) || false;

    const checkSession = () => {
        if (!session) {
            redirect("/login");
        }
    }

    useEffect(() => {
        checkSession();
    }, []);

    return (
        <div className='boxadm'>
            <Container>
                <div className='Boxadm mt-4'>
                    <Card className='cardsadm m-4' style={{ width: '30rem' }}>
                        <Card.Img  src={usuarios} />
                        <Card.Body>
                            <Card.Title>Pacientes Registrados</Card.Title>
                            <Card.Text>
                                Haga click aqui para ver la tabla de pacientes.
                            </Card.Text>
                            <hr />
                            <Link to="/usuario/tabla/" className="btn-adm text-decoration-none text-center">  Ver Pacientes  </Link>
                        </Card.Body>
                    </Card>
      
                    <Card className='cardsadm m-3' style={{ width: '30rem' }}>
                        <Card.Img src={turnos}  />
                        <Card.Body>
                            <Card.Title>Turnos Reservados</Card.Title>
                            <Card.Text>
                                Haga click aqui para ver los turnos reservados.
                            </Card.Text>
                            <hr />
                            <Link to="/turno/tabla/" className="btn-adm text-decoration-none text-center">  Ver Turnos  </Link>
                        </Card.Body>
                    </Card>

                    {/* <Card className='cardsadm m-4' style={{ width: '30rem' }}>
                        <Card.Img src={consultas} />
                        <Card.Body>
                            <Card.Title>Consultas Registradas</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <hr />
                            <Link to="/PaginaContacto/" className="btn-adm text-decoration-none text-center">  Ver Consultas  </Link>
                        </Card.Body>
                    </Card> */}
                </div>
            </Container>
        </div>
    );
};

export default PagAdmin;