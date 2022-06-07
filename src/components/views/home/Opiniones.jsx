import React from "react";
import { Carousel } from "react-bootstrap";
import imagen from "../../Assets/media/carousel.jpg"
import "./home.css";

const Opiniones = () => {
  return (
    <div className="margin-components">
      <h3 className="text-center fw-bold display-3 mt-5">Clientes satisfechos</h3>
      <Carousel>
        <Carousel.Item>
          <img
            className=" d-block w-100"
            src={imagen}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="fw-bold text-white display-5 texto-sombra">Maria Elena:</h3>
            <p className="fw-bold lead text-white display-5 texto-sombra">Todo desde el trato a la profesionalidad. A mi magui que la lleve casi moribunda le regalaron casi 10 años de vida feliz!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=" d-block w-100"
            src={imagen}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="fw-bold text-white display-5 texto-sombra">Marisa:</h3>
            <p className="fw-bold lead text-white display-5 texto-sombra">Lo mejor de Tucuman, buen trato y buen diagnostico. Excelente atencion las 24 horas del dia para cuando uno los requiera</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=" d-block w-100"
            src={imagen}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="fw-bold text-white display-5 texto-sombra">Juan Carlos:</h3>
            <p className="fw-bold text-white display-5 lead texto-sombra">
              "Para nosotros y para nuestros 3 perritos no hay un mejor equipo de veterinarios".
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Opiniones;