import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ServicioCard from "./ServicioCard";

const Servicio = () => {
    //state 
    const [servicios, setServicios] = useState(null);
  
    useEffect(() => {
      getServicios();
    }, [])
    const getServicios = async () => {  
       try{
          const res = await fetch("http://localhost:4001/servicios")
          const serviciosApi = await res.json()
          setServicios(serviciosApi)
      } catch (error) {
          console.log(error)
      }
  }
  
    return (
      <div className="my-5">
        <h2 className="text-center fw-bold">Nuestros Servicios</h2>
        <Container>
          <Row>
            {servicios && 
            servicios.map((servicios, i) => { 
              return <ServicioCard key={i} servicios={servicios}></ServicioCard>
            }) }
          </Row>
        </Container>
      </div>
    );
  };
  
  export default Servicio;