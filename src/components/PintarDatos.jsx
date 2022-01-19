import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import Personaje from './Personaje';

const PintarDatos = ({ nombrePersonaje }) => {

  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    consumirApi(nombrePersonaje)
  }, [nombrePersonaje]);

  const consumirApi = async (nombre) => {
    try {
      const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}&status=alive`);
      if (!res.ok) {
        return Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Personaje no encontrado',
        });
      }
      const datos = await res.json()
      console.log(datos.results)
      setPersonajes(datos.results)
    } catch (error) {

    }
  }
  return (
    <div className='row'>
      {personajes.map((item) => (
        <Personaje key={item.id} personaje={item} />
      ))}
    </div>
  );
};

export default PintarDatos;
