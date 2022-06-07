import React from 'react';
import portada from "../../Assets/media/Portada.jpg"
import "./home.css";

const Portada = () => {
    return (
        <div className="portada-container">
      <img className="img-portada" src={portada} alt="portada veterinaria"></img>
      <div className="portada-textos">
        <h1 className="portada-h1" >BIENVENIDOS</h1>
        <hr className="portada-hr"></hr>
        <h2 className="portada-h2">VETERINARIA ROLLING </h2>
      </div>
    </div>
    );
};

export default Portada;