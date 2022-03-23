import React, {useState, useEffect} from "react";


const Clima = () => {
    const [clima, setClima] = useState("");

  useEffect(() => {
    getClima();
  }, [])
  
  const getClima = async () => {
     try{
        const res = await fetch("https://ws.smn.gob.ar/map_items/weather")
        console.log(res)
        const climaApi = await res.json()
        const climaTucu = climaApi.filter(el => el.name === "San Miguel de Tucumán")

        setClima(climaTucu[0].weather.temp)
    } catch (error) {
        console.log(error)
    }
}
    return (
        <div className="container py-5">
            <p className="fw-bold lead"> Tiempo en San Miguel de Tucumán, Tucumán {clima}°C</p>
        </div>
    );
};

export default Clima;