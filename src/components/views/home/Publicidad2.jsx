import publicidad2 from "../../media/publicidad-2.mp4";
import "../../style/home.css";

const Publicidad2 = () => {
    return (
        <div>
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
