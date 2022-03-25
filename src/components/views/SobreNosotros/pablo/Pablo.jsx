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
        <h1 className="b-title">Pablo Romero</h1>
        <p className="b-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="b-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
        </p>
      </div>
    </div>
  );
};

export default Pablo;
