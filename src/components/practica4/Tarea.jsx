import React from 'react';

// Este componente individual representa una tarea. Maneja el cambio de estilo cuando la tarea está completada.
const Tarea = ({ tarea, index, onCompletar, onEliminar }) => {
  // Renderiza una tarea individual  
  return (
    <li
      style={{
        textDecoration: tarea.completada ? 'line-through' : 'none',
        color: tarea.completada ? 'gray' : 'black',
      }}
    >
      {tarea.texto}
      {/* Botón para completar/desmarcar la tarea */}
      <button onClick={() => onCompletar(index)}>
        {tarea.completada ? 'Desmarcar' : 'Completar'}
      </button>
      {/* Botón para eliminar la tarea */}
      <button onClick={() => onEliminar(index)}>Eliminar</button>
    </li>
  );
};

export default Tarea;
