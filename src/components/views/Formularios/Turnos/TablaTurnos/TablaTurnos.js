import React from 'react';
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Turno from "./Turno/Turno";
import "../../../../../Styles/GeneralStyles.css";

const TablaTurnos = ({ turnos, DBT, getTurno }) => {

  return (
    <div>
      <Container className="py-5">
        <div className="d-flex align-items-center justify-content-between">
          <h1>Tabla de Turnos</h1>
          <Link to="/turno/crear" className="btn-reservar text-decoration-none text-center">Reservar Turno </Link>
        </div>
        <hr />
        {/* Tabla de turnos */}
        {turnos.length > 0 ?
          <Table bordered hover responsive
            className="align-middle mt-3">
            <thead>
              <tr>
                <th>Nombre Del  Dueño</th>
                <th>Mascota</th>
                <th>Raza</th>
                <th>Veterinario</th>
                <th>Fecha del Turno</th>
                <th>Hora del Turno</th>
              </tr>
            </thead>
            <tbody>
              {turnos.map((turno) => (
                <Turno 
                  key={turno.id}
                  turno={turno}
                  DBT={DBT}
                  getTurno={getTurno} />
              ))}
            </tbody>
          </Table>
          :
          <div className="no-products-found d-flex align-items-center justify-content-center">
            {/* No turno found message */}
            <h1>🐾🐕  No hay Turnos Reservados 🐈🐾 </h1>
          </div>
        }
        <div className="text-end">
          <Link to="/PagAdmin/" className="btn-reservar text-decoration-none text-center">  Menu  </Link>
        </div>
      </Container>
    </div>

  );
};

export default TablaTurnos;