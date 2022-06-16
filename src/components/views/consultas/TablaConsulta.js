import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import Consulta from './Consulta';

const TablaConsulta = ({ consulta, DBC, getConsulta }) => {
    return (
        <div className='container my-5'>
            <div className='my-5'>
                <h1 className='display-5'>Consultas realizadas:</h1>
                <hr />
            </div>
            <Container>
                <Row>
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Nombre y apellido</th>
                                    <th>Email</th>
                                    <th>Consulta</th>
                                </tr>
                            </thead>
                            <tbody>
                                {consulta.map((consulta)=>(
                                    <Consulta
                                    key={consulta._id}
                                    consulta={consulta}
                                    DBC={DBC}
                                    getConsulta={getConsulta}/>
                                    
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TablaConsulta;