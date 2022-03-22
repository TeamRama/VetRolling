import React from 'react';
import Portada from './Portada';
import InformacionGralHome from './InformacionGralHome';
import Publicidad from './Publicidad';
import Productos from './productos/Productos';

const Home = () => {
    return (
        <div>
            <Portada></Portada>
            <main className='bg-dark'>
            <InformacionGralHome></InformacionGralHome>
            <Publicidad></Publicidad>
            <Productos></Productos>
            </main>
        </div>
    );
};

export default Home;