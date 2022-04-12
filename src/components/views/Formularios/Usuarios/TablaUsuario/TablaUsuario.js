import React from 'react';
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Usuario from "./Usuario/Usuario";
import "../../../../../Styles/GeneralStyles.css";



const TablaUsuario = ({usuario , URL, getApi}) => {
    return (
        <div>
             <Container className="py-5">
        <div className="d-flex align-items-center justify-content-between">
          <h1>Tabla de Clientes</h1>
          <Link to="/usuario/crear" className="btn-reservar text-decoration-none text-center">Crear Usuario </Link>
        </div>
        <hr />
        {/* Tabla de turnos */}
        {usuario.length != 0 ?
          <Table bordered hover responsive
            className="align-middle mt-3">
            <thead>
              <tr>
                <th>email </th>
                <th>Nombre Completo del dueño</th>
                <th>Nombre o Apodo de Mascota</th>
                <th>Contraseña</th>
                <th>Fecha de Nacimiento</th>
                <th>Celular</th>
              </tr>
            </thead>
            <tbody>
              {usuario.map((usuario) => (
                <Usuario key={usuario.id}
                usuario={usuario}
                  URL={URL}
                  getApi={getApi} />
              ))}
            </tbody>
          </Table>
          :
          <div className="no-products-found d-flex align-items-center justify-content-center">
            {/* No usuarios  creaados */}
            <h1> No hay usuario creados  </h1>
          </div> 
        }
      </Container>
    </div>
        
    );
};

export default TablaUsuario;