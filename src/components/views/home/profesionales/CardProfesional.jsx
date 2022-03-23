import React from "react";
import "../../../style/home.css"

const CardProfesional = ({ imagen, nombre, apellido, descripcion }) => {
  return (
    <div className="card">
      <img className="img-fluid" src={imagen} alt="licenciada"></img>
      <div className="card-body">
        <h4 className="card-title fw-bold">{nombre + " " + apellido}</h4>
        <p className="card-text lead">{descripcion}</p>
      </div>
    </div>
  );
};

export default CardProfesional;