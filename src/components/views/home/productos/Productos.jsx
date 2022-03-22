import React, {useState, useEffect} from "react";
import CardProducto from "./CardProducto";

const Productos = () => {
    const [productos, setProductos] = useState(null);
  
    useEffect(() => {
      getProductos();
    }, [])
    
    const getProductos = async () => {
       try{
          const res = await fetch("http://localhost:4001/productos")
          console.log(res)
          const productosApi = await res.json()
          setProductos(productosApi)
      } catch (error) {
          console.log(error)
      }
  }
  
    return (
      <div className="container">
          <h1 className="text-white text-center fw-bold">Productos para tus mascotas</h1>
          <div>
        <div className="row ">
          {productos && productos.map((el, i) => {
            return(
              <div key={i} className="col-lg-4 col-md-12 col-sm-12 my-3 text-center d-flex justify-content-center aling-items-center">
                <CardProducto imagen={el.productoImg} nombre={el.productoTitle} precio={el.productoPrecio}></CardProducto>
              </div>
            )
          })}
        </div>
      </div>
      </div>
    );
  };
  
  export default Productos;
  