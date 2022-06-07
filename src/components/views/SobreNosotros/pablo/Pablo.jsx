import "./pablo.css";
import Romero from "../../../Assets/ImgNosotros/romero.jpg";

const Pablo = () => {
  return (
    <div className="b">
      <div className="b-left">
        <div className="b-card bg"></div>
        <div className="b-card">
          <img src={Romero} alt="" className="b-img"/>
        </div>
      </div>
      <div className="b-right">
        <h1 className="b-title">Pablo Romero Abadie</h1>
        <p className="b-sub">
        Doctor en Medicina Veterinaria y zootécnia
        </p>
        <p className="b-desc">
        Empecé trabajando como especialista en peluquería canina y felina, además de ser durante años encargado de mantener la estética de la Clínica.  Además, he asistido a distintos congresos dirigidos a ATVs. He realizado el curso Experto en Monitorización y Ventilación Anestésica impartido por MINDRAY. A día de hoy soy el responsable de la gestión de los planes de Salud Vetplan, enfocados en la prevención de enfermedades y protección de la salud.
        </p>
      </div>
    </div>
  );
};

export default Pablo;
