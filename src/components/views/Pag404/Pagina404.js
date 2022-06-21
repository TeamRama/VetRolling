import React from "react";
import { Link } from "react-router-dom";
import error from "../../Assets/Img404/error.jpg";

import "./Pagina404.css";


const Pagina404 = () => {

  return (
    <div className="my-5">
      <div className="E404">
        <img className="Error404 my-3" src={error} alt="error 404 pagina no disponible"/>
        <div className="text-center">
          <Link to="/" className="btn-ingresar text-decoration-none  my-2">Volver </Link>
        </div>
      </div>
    </div>
  )
};

export default Pagina404;
