import React from 'react';
import Tarea from './Tarea';

// Este componente muestra la lista de tareas. Renderiza un componente Tarea por cada tarea de la lista.
// Las props tareas, onCompletar, onEliminar vienen del render de la lista en Tareas.jsx
const ListaTareas = ({ tareas, onCompletar, onEliminar }) => { 
  return (
    <ul>  
      {tareas.map((tarea, index) => ( // map: Itera sobre el arreglo de tareas y renderiza un componente Tarea para cada una.
        <Tarea
          key={index} // Se utiliza el índice de la tarea como clave
          index={index}
          tarea={tarea}
          onCompletar={onCompletar} // Se pasan como props para que cada tarea pueda ser marcada como completada o eliminada.
          onEliminar={onEliminar}
        />
      ))}
    </ul>
  );
};

export default ListaTareas;
