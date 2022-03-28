import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { validateNombreDueño, validateApellidoDueño, validateNombreMascota, validateRaza, validateVeterinario, validateHorario } from "../../../../helpers/ValidateFields";
import "../../Styles/GeneralStyles.css";



const CrearTurno = ({ URL }) => {
  //States 
  const [nombreDueño, setNombreDueño] = useState("");
  const [apellidoDueño, setApellidoDueño] = useState("");
  const [nombreMascota, setNombreMascota] = useState("");
  const [raza, setRaza] = useState("");
  const [veterinario, setVeterinario] = useState("");
  const [horario, setHorario] = useState("");


  // Navigate 
  const navigate = useNavigate()
  const handleClick = () => {

  }


  // Funcion para guardar los datos o crear el producto 
  const handleSubmit = (e) => {
    e.preventDefault();

    // validar los campos

    if (
      !validateNombreDueño(nombreDueño) ||
      !validateApellidoDueño(apellidoDueño) ||
      !validateNombreMascota(nombreMascota) ||
      !validateRaza(raza) ||
      !validateVeterinario(veterinario)||
      !validateHorario(horario) 
    ) {
      Swal.fire("Ops!", " Datos incorrectos .", "error");
      return;
    }

    // Enviar los datos para guardarlos 

    const newTurno = {
      nombreDueño,
      apellidoDueño,
      nombreMascota,
      raza,
      veterinario,
      horario
    
    }


    Swal.fire({
      title: 'Seguro que eliges este turno?',
      text: "No podras elegir otro !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Reservado',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newTurno)
          });
          if (res.status === 201) {
            Swal.fire('Turno Guardado!', ' Tu turno fue reservado .', 'success');
            navigate("/turno/tabla");

          }
        } catch (error) {
          console.log(error);
        }

      }
    });
  };

  return (
    <div  >
      <Container className="py-5 cuerpo">
        <h1>Todos los Turnos </h1>
        <hr />
        {/* Form Product */}

        <Form className="my-5" onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre del Dueño</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ej: Nombre"
                  onChange={({ target }) => setNombreDueño(target.value)} />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Apellido del Dueño </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ej: Apellido"
                  onChange={({ target }) => setApellidoDueño(target.value)} />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Nombre de la Mascota </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="nombre o apodo"
                  onChange={({ target }) => setNombreMascota(target.value)}
                />
              </Form.Group>
            </Col>
          <Col md={6}>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>Tipo Raza</Form.Label>
              <Form.Select onChange={({ target }) => setRaza(target.value)} >
                <option value="">Tipo de Raza</option>
                <option value="perro">Perro</option>
                <option value="gato">Gato</option>
                <option value="ave">Ave</option>
                <option value="reptil">Reptil</option>
                <option value="otro">Otro</option>
              </Form.Select>
            </Form.Group>
          </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label> Elegir Veterinario</Form.Label>
                <Form.Select onChange={({ target }) => setVeterinario(target.value)} >
                  <option value="">Veterinario</option>
                  <option value="veta">Veta</option>
                  <option value="vetb">Vetb</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6}>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Label> Hora del turno</Form.Label>
                        <Form.Select onChange={({ target }) => setHorario(target.value)} >
                            <option value="">Elegir Horario</option>
                            <option value="A">8-8:30</option>
                            <option value="B">8:30-9</option>
                            <option value="C">9-9:30</option>
                            <option value="D">9:30-10</option>
                            <option value="E">10-10:30</option>
                            <option value="F">10:30-11</option>
                            <option value="G">11-11:30</option>
                            <option value="H">11:30-12</option>
                            <option value="I">17-17:30</option>
                            <option value="J">17:30-18</option>
                            <option value="K">18-18:30</option>
                            <option value="L">18:30-19</option>
                            <option value="M">19-19:30</option>
                            <option value="N">19:30-20</option>
                            <option value="Ñ">20-20:30</option>
                            <option value="O">20:30-21</option>
                         </Form.Select>
                    </Form.Group>
            </Col>
        </Row>
        <div className="text-end">
          <button className="btn-reservar"
            onClick={handleClick}>Reservar</button>
        </div>
      </Form>
    </Container >
    </div >
  );
};

export default CrearTurno;