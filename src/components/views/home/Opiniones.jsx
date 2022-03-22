import React from "react";
import { Carousel } from "react-bootstrap";
import imagen from "../../media/carousel.jpg"
import "../../style/home.css";

const Opiniones = () => {
  return (
    <div className="my-5">
      <Carousel>
        <Carousel.Item>
          <img
            className="img-opiniones-carousel d-block w-100"
            src={imagen}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="fw-bold text-white display-3">Maria Elena:</h3>
            <p className="lead text-white display-3">Todo desde el trato a la profesionalidad. A mi magui que la lleve casi moribunda le regalaron casi 10 años de vida feliz!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-opiniones-carousel d-block w-100"
            src={imagen}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="fw-bold text-white display-3">Marisa:</h3>
            <p className="lead text-white display-3">Lo mejor de Tucuman, buen trato y buen diagnostico. Excelente atencion las 24 horas del dia para cuando uno los requiera</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="img-opiniones-carousel d-block w-100"
            src={imagen}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="fw-bold text-white display-3">Juan Carlos:</h3>
            <p className="text-white display-3 lead">
              "Para nosotros y para nuestros 3 perritos no hay un mejor equipo de veterinarios".
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Opiniones;