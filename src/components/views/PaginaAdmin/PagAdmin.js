import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./PagAdmin.css";

const PagAdmin = () => {
    return (
        <div className='box '> 
        <Container className="">
             <Link to="/usuario/tabla" className="btn-reservar text-decoration-none text-center my-2">Clientes</Link>
             <br/>
             <Link to="/turno/tabla" className="btn-reservar text-decoration-none text-center my-2 ">Turnos  </Link>
             <br/>
             <Link to="/PaginaContacto" className="btn-reservar text-decoration-none text-center my-2">Consultas  </Link>

        </Container>
        </div>
    );
};

export default PagAdmin;