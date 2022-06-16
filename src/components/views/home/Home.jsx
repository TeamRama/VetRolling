import React from 'react';
import Portada from './Portada';
import InformacionGralHome from './InformacionGralHome';
import Publicidad from './Publicidad';
import Productos from './productos/Productos';
import Planes from './planes/Planes';
import Servicio from "./servicios/Servicio"
import Opiniones from './Opiniones';
import Profesionales from './profesionales/Profesionales';
import Publicidad2 from './Publicidad2';
import Clima from "./Clima"
import "../../../Styles/GeneralStyles.css"
import "./home.css"



const Home = () => {
    return (
        <div>
            <Portada></Portada>
             <Clima></Clima> 
            <main className='container'>
                <InformacionGralHome ></InformacionGralHome>
                <Publicidad></Publicidad>
                <Productos ></Productos>
                <Planes ></Planes>
                <Servicio ></Servicio>
                <Publicidad2 ></Publicidad2>
                <Opiniones ></Opiniones>
                <Profesionales ></Profesionales>
            </main>

        </div>
    );
};

export default Home;