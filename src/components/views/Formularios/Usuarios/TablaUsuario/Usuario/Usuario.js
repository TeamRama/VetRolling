import React from 'react';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";




const Usuario = ({ usuario , URL, getApi }) => {

  const handleDelete = (id) => {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'eliminado ',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`${URL}/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },

          });
          if (res.status === 200) {
            Swal.fire('Eliminado  !', ' Sus datos fueron elimandos !.', 'success');
            getApi();

          }

        } catch (error) {
          console.log(error);
        }
      }

    });

  }
  return (


    <tr>
      <td>{usuario.id}</td>
      <td>{usuario.email}</td>
      <td>{usuario.nombreDueño}</td>
      <td>{usuario.nombreMascota}</td>
      <td>{usuario.contraseña}</td>
      <td>{usuario.fecha}</td>
      <td>{usuario.celular}</td>
      <td className="w-25">
        <div className="d-flex justify-content-center">
          <Link to={`/usuario/editar/${usuario.id}`} className="btn-editar   text-decoration-none text-center mx-1">Editar Usuario</Link>
          <button className="btn-borrar text-decoration-none text-center mx-1"
            onClick={() => handleDelete(usuario.id)} >
            Borrar Usuario</button>
        </div>
      </td>
    </tr>


  );
};

export default Usuario;