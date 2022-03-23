import React from "react";
import { useState, useEffect } from "react";
import CardPlan from "./CardPlan";


const Planes = () => {
  const [planes, setPlanes] = useState(null);

  useEffect(() => {
    getPlanes();
  }, []);

  const getPlanes = async () => {
    try {
      const res = await fetch("http://localhost:4001/planes");
      const planesApi = await res.json();
      setPlanes(planesApi);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2 className="text-center fw-bold my-5">
        Nuestra veterinaria actualmente ofrece un servicio especial mensual para
        nuestras mascotas al estilo de una obra social, por lo que cuenta con 3
        planes:
      </h2>
      <div className="row">
        {planes &&
          planes.map((el, i) => {
            return (
              <div key={i} className="my-5">
                <CardPlan
                  imagen={el.planImg}
                  nombre={el.planTitle}
                  descripcion={el.planDescripcion}
                ></CardPlan>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Planes;