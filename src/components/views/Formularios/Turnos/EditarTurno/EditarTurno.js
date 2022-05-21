import { useEffect, useRef, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useNavigate, useParams, Link } from "react-router-dom";
import Swal from "sweetalert2";
import { validateNombreDueño, validateNombreMascota, validateRaza, validateVeterinario, validateHorario, validateFecha } from "../../../../helpers/ValidateFields";
import "../../../../../Styles/GeneralStyles.css";
import "../CrearTurno/CrearTurno.css";


const EditarTurno = ({ URL, getApi }) => {



    const [turno, setTurno] = useState({});


    const { id } = useParams();

    const nombreDueñoRef = useRef("")
    const nombreMascotaRef = useRef("")

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
            !validateNombreMascota(nombreMascotaRef.current.value) ||
            !validateRaza(turno.raza) ||
            !validateVeterinario(turno.veterinario) ||
            !validateHorario(turno.horario) ||
            !validateFecha(turno.fecha)
        ) {
            Swal.fire("Ops!", " Algun dato es incorrecto .", "error");
            return;
        }


        const turnoUpdated = {
            nombreDueño: nombreDueñoRef.current.value,
            nombreMascota: nombreMascotaRef.current.value,
            raza: turno.raza,
            veterinario: turno.veterinario,
            horario: turno.horario,
            fecha: turno.fecha,
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
                        Swal.fire('Modificado ', 'Su turno fue modificado con exito !!.', 'success');
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
            <Container className="py-5 DatosTurno">
                <h1>Editar Turno</h1>
                <hr />
                {/* formulario para editar  Turnos */}
                <div className='Form-Turno'>
                    <Form className="my-5" onSubmit={handleSubmit}>
                        <Form.Group className="mx-5 px-5" controlId="formBasicEmail">
                            <Form.Label>Nombre Del Dueño</Form.Label>
                            <Form.Control type="text"
                                placeholder="Nombre"
                                defaultValue={turno.nombreDueño}
                                ref={nombreDueñoRef} />
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
                            <Form.Select
                                value={turno.raza}
                                onChange={({ target }) => setTurno({ ...turno, raza: target.value })}>
                                <option value="">Tipo de Raza</option>
                                <option value="perro">Perro</option>
                                <option value="gato">Gato</option>
                                <option value="ave">Ave</option>
                                <option value="reptil">Reptil</option>
                                <option value="otro">Otro</option>json-server --watch db.json --port 3004
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Label>Veterinario</Form.Label>
                            <Form.Select
                                value={turno.veterinario}
                                onChange={({ target }) => setTurno({ ...turno, veterinario: target.value })}>
                                <option value="">Elegir Veterinario</option>
                                <option value="veta">Vet A</option>
                                <option value="veteb">Vet B</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Label> Hora del turno</Form.Label>
                            <Form.Select
                                value={turno.veterinario}
                                onChange={({ target }) => setTurno({ ...turno, horario: target.value })}>
                                <option value="">Elegir Horario</option>
                                <option value="09hs">09 hs</option>
                                <option value="10hs">10 hs</option>
                                <option value="11hs">11 hs</option>
                                <option value="12hs">12 hs</option>
                                <option value="17hs">17 hs</option>
                                <option value="18hs">18 hs</option>
                                <option value="19hs">19 hs</option>
                                <option value="20hs">20 hs</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="my-3">
                            <Form.Label className='Rlabel'>Dia del turno</Form.Label>
                            <Form.Control
                                type="date"
                                value={turno.fecha}
                                onChange={({ target }) => setTurno({ ...turno, fecha: target.value })} />
                        </Form.Group>
                        <div className="text-end">
                            <button className="btn-reservar">Modificar</button>
                        </div>
                    </Form>
                </div>
                <div className="text-end">
                    <Link to="/turno/tabla/" className="btn-reservar text-decoration-none text-center">  Atras  </Link>
                </div>
            </Container>

        </div>
    );
};

export default EditarTurno;