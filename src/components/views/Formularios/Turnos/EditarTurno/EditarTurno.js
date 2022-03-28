import { useEffect, useRef, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { validateNombreDueño, validateApellidoDueño, validateNombreMascota, validateRaza, validateVeterinario, validateHorario } from "../../../../helpers/ValidateFields";
import "../../../../../Styles/GeneralStyles.css";


const EditarTurno = ({ URL, getApi }) => {



    const [turno, setTurno] = useState({});


    const { id } = useParams();

    const nombreDueñoRef = useRef("")
    const apellidoDueñoRef = useRef("")
    const nombreMascotaRef = useRef("")
    const horarioRef = useRef("")



    const navigate = useNavigate()


    useEffect(async () => {
        try {
            const res = await fetch(`${URL}/${id}`);
            const turnoApi = await res.json();
            setTurno(turnoApi);
        } catch (error) {
            console.log(error);
        }

    }, []);



    const handleSubmit = (e) => {
        e.preventDefault()

        if (
            !validateNombreDueño(nombreDueñoRef.current.value) ||
            !validateApellidoDueño(apellidoDueñoRef.current.value) ||
            !validateNombreMascota(nombreMascotaRef.current.value) ||
            !validateRaza(turno.raza) ||
            !validateVeterinario(turno.veterinario) ||
            !validateHorario(horarioRef.current.value)
        ) {
            Swal.fire("Ops!", " Algun dato es incorrecto .", "error");
            return;
        }


        const turnoUpdated = {
            nombreDueño: nombreDueñoRef.current.value,
            apellidoDueño: apellidoDueñoRef.current.value,
            nombreMascota: nombreMascotaRef.current.value,
            raza: turno.raza,
            veterinario: turno.veterinario,
            horario: horarioRef.current.value
        };

        Swal.fire({
            title: 'Seguro que quieres cambiar el turno?',
            text: "No podras volver a cambiar !",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Turno Cambiado',
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await fetch(`${URL}/${id}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(turnoUpdated),
                    });
                    if (res.status === 200) {
                        Swal.fire('Updated', 'Your file has been Updated.', 'success');
                        getApi();
                        navigate("/turno/tabla");
                    }

                } catch (error) {
                    console.log(error);
                }
            }

        });
    };


    return (
        <div>
            <Container className="py-5">
                <h1>Editar Turno</h1>
                <hr />
                {/* formulario de Turnos */}
                <Form className="my-5" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nombre Del Dueño</Form.Label>
                        <Form.Control type="text"
                            placeholder="Nombre"
                            defaultValue={turno.nombreDueño}
                            ref={nombreDueñoRef} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Apellido Del Dueño</Form.Label>
                        <Form.Control type="text"
                            placeholder="Apellido"
                            defaultValue={turno.apellidoDueño}
                            ref={apellidoDueñoRef} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nombre de la Mascota</Form.Label>
                        <Form.Control type="text"
                            placeholder="nombre o apodo"
                            defaultValue={turno.nombreMascota}
                            ref={nombreMascotaRef} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Label>Raza</Form.Label>
                        <Form.Select value={turno.raza} onChange={({ target }) => setTurno({ ...turno, raza: target.value })}>
                            <option value="">Tipo de Raza</option>
                            <option value="perro">Perro</option>
                            <option value="gato">Gato</option>
                            <option value="ave">Ave</option>
                            <option value="reptil">Reptil</option>
                            <option value="otro">Otro</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Label>Veterinario</Form.Label>
                        <Form.Select value={turno.veterinario} onChange={({ target }) => setTurno({ ...turno, veterinario: target.value })}>
                            <option value="">Elegir Veterinario</option>
                            <option value="veta">Vete A</option>
                            <option value="veteb">Vete B</option>
                         </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Label> Hora del turno</Form.Label>
                        <Form.Select value={turno.veterinario} onChange={({ target }) => setTurno({ ...turno, horario: target.value })}>
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
                    <div className="text-end">
                        <button className="btn-reservar">Modificar</button>
                    </div>
                </Form>
            </Container>

        </div>
    );
};

export default EditarTurno;