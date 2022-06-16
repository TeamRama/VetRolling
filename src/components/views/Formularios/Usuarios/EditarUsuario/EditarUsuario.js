import { useEffect, useRef, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { validateEmail, validateNombreDueño, validateNombreMascota, validateEspecie, validateRaza, validateCelular } from "../../../../helpers/ValidateFields";
import "../../../../../Styles/GeneralStyles.css";



const EditarUsuario = ({ DBU, getUsuario }) => {
    const [usuario, setUsuario] = useState({});
    const { id } = useParams();

    const emailRef = useRef("")
    const nombreDueñoRef = useRef("")
    const nombreMascotaRef = useRef("")
    const celularRef = useRef("")
    const especieRef = useRef("")

    const navigate = useNavigate()

    useEffect(async () => {
        try {
            const res = await fetch(`${DBU}/${id}`);
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
            !validateCelular(celularRef.current.value)||
            !validateNombreMascota(nombreMascotaRef.current.value) ||
            !validateEspecie(especieRef.current.value) ||
            !validateRaza(usuario.Raza) 
        ) {
            Swal.fire("Ops!", " Algun dato es incorrecto .", "error");
            return;
        }
        const usuarioUpdated = {
            email: emailRef.current.value,
            nombreDueño: nombreDueñoRef.current.value,
            celular: celularRef.current.value,
            nombreMascota: nombreMascotaRef.current.value,
            especie: especieRef.current.value,
            raza: usuario.raza,
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
                    const res = await fetch(`${DBU}/${id}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(usuarioUpdated),
                    });
                    if (res.status === 200) {
                        Swal.fire('Editado ', 'Sus datos de usuarios fueron editados .', 'success');
                        getUsuario();
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
                        <Form.Label>Celular </Form.Label>
                        <Form.Control type="tel"
                            placeholder="Celular"
                            defaultValue={usuario.celular}
                            ref={celularRef}
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
                        <Form.Label>Especie </Form.Label>
                        <Form.Control type="text"
                            placeholder="Especie"
                            defaultValue={usuario.especie}
                            ref={especieRef}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Label>Tipo de Especie</Form.Label>
                                <Form.Select
                                value={usuario.raza}
                                onChange={({ target }) => setUsuario({ ...usuario, raza: target.value })}>
                                <option value="">Tipo de Raza</option>
                                <option value="perro">Perro</option>
                                <option value="gato">Gato</option>
                                <option value="ave">Ave</option>
                                <option value="reptil">Reptil</option>
                                <option value="otro">Otro</option>
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

export default EditarUsuario;