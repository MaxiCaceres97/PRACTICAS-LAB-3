import React, { useState } from 'react';

// Este componente contiene el formulario para agregar nuevas tareas.
const AgregarTarea = ({ onAgregar }) => {

  // Estado para manejar el valor del input de la nueva tarea
  const [nuevaTarea, setNuevaTarea] = useState('');

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario
    if (nuevaTarea.trim()) { // Verifica que no sea una cadena vacía
      onAgregar(nuevaTarea); // Llama a la función pasada como prop para agregar la tarea
      setNuevaTarea(''); // Limpia el input
    }
  };

  // Renderiza el formulario de agregar tarea
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nueva tarea"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)} // Actualiza el estado con el valor del input
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default AgregarTarea;
