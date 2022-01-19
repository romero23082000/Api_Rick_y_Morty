import { useFormulario } from '../hooks/useFormulario';
import Swal from 'sweetalert2'

const Formulario = ({ setPersonaje }) => {
  const [inputs, handleChange, reset] = useFormulario({
    nombre: ''
  })

  // Destructuring
  const { nombre } = inputs

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(nombre);
    if (!nombre.trim()) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Escriba algo por favor',
        footer: 'El campo esta vacio'
      })
    }
    setPersonaje(nombre.trim().toLowerCase());
    reset();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
        placeholder='Ingrese el personaje'
        className='form-control mb-2'
        value={nombre}
        onChange={handleChange}
        name='nombre' />
      <button type='submit'
        className='btn btn-success'>Buscar</button>
    </form>
  );
};

export default Formulario;
