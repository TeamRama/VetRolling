import "./Ramiro.css";
import Rami from "../../../Assets/ImgNosotros/ramiro.jpg";

const Ramiro = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Rami} alt="" className="a-img"/>
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Ramiro Nahuel Perez</h1>
        <p className="a-sub">
         Doctor en Medicina Veterinaria y zootécnia
        </p>
        <p className="a-desc">
          Responsable del servicio de Laserterapia, hospitalizacion, laboratorio externo y asistente en consultas. Siempre estoy interesado en seguir mejorando mi formacion para poder abrir otras lineas de trabajo relacionadas con el mundo animal. 
        </p>
      </div>
    </div>
  );
};

export default Ramiro;
