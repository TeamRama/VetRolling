import React from "react";
import publicidad from "../../media/publicidad.video.mp4";
import "../../style/home.css";

const Publicidad = () => {
  return (
    <div>
      <div className="my-5">
        <h2 className="text-center fw-bold publicidad-h2">
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
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Publicidad;
