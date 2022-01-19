import React from 'react';

const Personaje = ({ personaje }) => {
  const { name, species, image } = personaje
  return (
    <div className='col-md-4 mt-2' >
      <div className="card">
        <img src={image} alt="" className='card-img-top' />
        <div className="card-body">
          <h5>{name}</h5>
          <p>{species}</p>
        </div>
      </div>
    </div>

  );
};

export default Personaje;
