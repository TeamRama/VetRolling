import publicidad2 from "../../Assets/media/publicidad-2.mp4";
import "./home.css";

const Publicidad2 = () => {
    return (
        <div className="margin-components">
            <video
                className="publicidadVideoHome"
                src={publicidad2}
                alt="publicidad"
                loop
                autoPlay
                muted
                controls>
            </video>
        </div>
    )
}

export default Publicidad2;
