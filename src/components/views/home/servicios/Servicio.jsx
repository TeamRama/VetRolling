import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ServicioCard from "./ServicioCard";

const Servicio = () => {
    //state 
    const [servicios, setServicios] = useState(null);

    const DBSERVICE = process.env.REACT_APP_API_SERVICIOS;
  
    useEffect(() => {
      getServicios();
    }, [])
    const getServicios = async () => {  
       try{
          const res = await fetch(DBSERVICE)
          const serviciosApi = await res.json()
          setServicios(serviciosApi)
      } catch (error) {
          console.log(error)
      }
  }
  
    return (
      <div>
        <h2 className="text-center display-4 fw-bold mt-5">Nuestros Servicios</h2>
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