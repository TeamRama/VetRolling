import React from 'react';
import Portada from './Portada';
import InformacionGralHome from './InformacionGralHome';
import Publicidad from './Publicidad';
import Productos from './productos/Productos';
import Planes from './planes/Planes';
import Servicio from "./servicios/Servicio"
import Opiniones from './Opiniones';
import Profesionales from './profesionales/Profesionales';



const Home = () => {
    return (
        <div>

            <Portada></Portada>
            <main className='container'>
            <InformacionGralHome></InformacionGralHome>
            <Publicidad></Publicidad>
            <Productos></Productos>
            <Planes></Planes>
            <Servicio></Servicio>
            <Opiniones></Opiniones>
            <Profesionales></Profesionales>
            </main>

        </div>
    );
};

export default Home;