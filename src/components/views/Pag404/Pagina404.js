import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import error from "../../Assets/Img404/error.jpg";

import "./Pagina404.css";


const Pagina404 = () => {

  return (
    <Container>
       <div className="my-5 text-center">
        <img className="Error404 my-3 img-fluid" src={error} alt="error 404 pagina no disponible"/>
        <div className="text-center">
          <Link to="/" className="btn-ingresar text-decoration-none  my-2">Volver </Link>
        </div>
    </div>
    </Container>
   
  )
};

export default Pagina404;
