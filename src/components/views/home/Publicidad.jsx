import React from "react";
import publicidad from "../../Assets/media/publicidad.video.mp4";
import "../../style/home.css";

const Publicidad = () => {
  return (
    <div>
      <div className="my-5">
        <h2 className="text-center display-4 fw-bold">
          Alimentacion de alta calidad
        </h2>
        <div>
          <video
            className="publicidadVideoHome"
            src={publicidad}
            alt="publicidad"
            autoPlay
            loop
            muted
            controls
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Publicidad;
