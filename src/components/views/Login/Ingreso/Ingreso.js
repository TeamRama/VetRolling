import React, { useState } from "react";
import '../Ingreso/Ingreso.css';
import { Form  } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from "react-router-dom";
import { validateEmail, validateContraseña } from "../../../helpers/ValidateFields";
import Swal from "sweetalert2";
import { faEye } from "@fortawesome/free-solid-svg-icons";






const Ingreso = () => {

  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState("faEye");


  const navigate = useNavigate()

  const handleClick = () => {
  }


  const handleToggle = () => {
    if (type === 'password') {
      setIcon(faEye);
      setType('text');
    } else {
      setIcon(faEye);
      setType('password')
    }
  }






  const handleSubmit = (e) => {
    e.preventDefault();


    if (
      !validateEmail(email) ||
      !validateContraseña(contraseña)

    ) {
      Swal.fire("Datos Incorrectos !", "Intenta Nuevamente.", "error");
      return;
    }
    navigate("/PagAdmin");
  };



  return (
    <div>

      <div className="d-flex flex-column justify-content-center boxc py-5 mx-5">
        <h1 className="mx-5">Bienvenidos !! </h1>
        <hr />
        <div>

          <div className='box'>
            <Form className='FormLogin p-4' onSubmit={handleSubmit}>
              <Form.Group className="usuario" controlId="formBasicEmail">
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                  className=""
                  type="email"
                  placeholder="Usuario o Email"
                  onChange={({ target }) => setEmail(target.value)}
                  required />
              </Form.Group>
              <Form.Group className="mb-3 Contraseña" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <div className="contraseña">
                  <Form.Control className='contraseña'
                    type={type}
                    placeholder="Contraseña"
                    onChange={({ target }) => setContraseña(target.value)}
                    required />
                  <FontAwesomeIcon
                    className='icon'
                    icon={faEye}
                    onClick={handleToggle} />
                </div>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  className='checkboxL'
                  type="checkbox"
                  name="terminos"
                  id="terminos"
                  label="Recordar mis datos"
                  required />
              </Form.Group>
              <div>
                <button className="btn-reservar"
                  onClick={handleClick}>
                  Ingresar</button>
              </div>
              <Link className="nav-link login" to="*">Olvide mi Contraseña</Link>

              <Link className="nav-link login" to="/usuario/crear">Registro</Link>
              <hr className='mb-3' />
              <div className='Opcionesdeingreso'>
                <p className="text-secondary my-4">O ingresá con</p>
                <div className='fontAIconL'>
                  <FontAwesomeIcon className='IconL px-3' icon={faGoogle} />
                  <FontAwesomeIcon className='IconL px-3' icon={faFacebook} />
                </div>
              </div>
            </Form>
          </div>


        </div>
      </div>

    </div>


  );


};





export default Ingreso;