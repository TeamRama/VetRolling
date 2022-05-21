import React from "react";
import { Link } from "react-router-dom";
import error from "../../Assets/Img404/error.jpg";

import "./Pagina404.css";


const Pagina404 = () => {

  return (
    <div>
      <div className="E404">
        <img className=" Error404 my-3" src={error} />
        <div>
          <Link to="/" className="btn-ingresar text-decoration-none text-center my-2">Volver </Link>
        </div>
      </div>
    </div>
  )
};

export default Pagina404;
