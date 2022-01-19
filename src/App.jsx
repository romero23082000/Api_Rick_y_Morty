import React, { useState } from 'react';
import Formulario from './components/Formulario';
import PintarDatos from './components/PintarDatos';


const App = () => {
  const [personaje, setPersonaje] = useState('');
  return (
    <div className='container'>
      <h1>Api rick y morty</h1>
      <Formulario setPersonaje={setPersonaje} />
      <PintarDatos nombrePersonaje={personaje} />
    </div>
  )
};

export default App;
