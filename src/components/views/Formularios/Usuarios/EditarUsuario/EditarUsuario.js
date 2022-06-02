import { useEffect, useRef, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { validateEmail, validateNombreDueño, validateNombreMascota, validateContraseña, validateFecha, validateCelular } from "../../../../helpers/ValidateFields";
import "../../../../../Styles/GeneralStyles.css";



const EditarTurno = ({ URL, getApi }) => {



    const [usuario, setUsuario] = useState({});

    const { id } = useParams();


    const emailRef = useRef("")
    const nombreDueñoRef = useRef("")
    const nombreMascotaRef = useRef("")
    const contraseñaRef = useRef("")
    const celularRef = useRef("")


    const navigate = useNavigate()


    useEffect(async () => {
        try {
            const res = await fetch(`${URL}/${id}`);
            const usuarioApi = await res.json();
            setUsuario(usuarioApi);
        } catch (error) {
            console.log(error);
        }

    }, []);



    const handleSubmit = (e) => {
        e.preventDefault()

        if (
            !validateEmail(emailRef.current.value) ||
            !validateNombreDueño(nombreDueñoRef.current.value) ||
            !validateNombreMascota(nombreMascotaRef.current.value) ||
            !validateContraseña(contraseñaRef.current.value) ||
            !validateFecha(usuario.fecha) ||
            !validateCelular(celularRef.current.value)
        ) {
            Swal.fire("Ops!", " Algun dato es incorrecto .", "error");
            return;
        }


        const usuarioUpdated = {
            email: emailRef.current.value,
            nombreDueño: nombreDueñoRef.current.value,
            nombreMascota: nombreMascotaRef.current.value,
            contraseña: contraseñaRef.current.value,
            fecha: usuario.fecha,
            celular: celularRef.current.value,
        };

        Swal.fire({
            title: 'Seguro que quieres editar los Datos?',
            text: "No podras volver a Editar !",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Editado ',
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await fetch(`${URL}/${id}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(usuarioUpdated),
                    });
                    if (res.status === 200) {
                        Swal.fire('Editado ', 'Sus datos de usuarios fueron editados .', 'success');
                        getApi();
                        navigate("/usuario/tabla");
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
                {/* formulario de usuario */}
                <Form className="my-5" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email"
                            placeholder="Correo electronico"
                            defaultValue={usuario.email}
                            ref={emailRef}
                        />
                         </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Nombre Del Dueño</Form.Label>
                            <Form.Control type="text"
                                placeholder="nombre completo"
                                defaultValue={usuario.nombreDueño}
                                ref={nombreDueñoRef}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Nombre de la Mascota</Form.Label>
                            <Form.Control type="text"
                                placeholder="nombre o apodo"
                                defaultValue={usuario.nombreMascota}
                                ref={nombreMascotaRef}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Contraseña </Form.Label>
                            <Form.Control type="password"
                                placeholder="contraseña"
                                defaultValue={usuario.contraseña}
                                ref={contraseñaRef}
                            />
                        </Form.Group>                     
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Fecha de Nacimiento </Form.Label>
                        <Form.Control
                            type="date"
                            value={usuario.fecha} 
                            onChange={({ target }) => setUsuario({ ...usuario, fecha: target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Celular </Form.Label>
                            <Form.Control type="tel"
                                placeholder="Celular"
                                defaultValue={usuario.celular}
                                ref={celularRef}
                            />
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