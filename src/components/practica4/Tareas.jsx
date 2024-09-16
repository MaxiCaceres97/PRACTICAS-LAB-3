import React, { useState } from 'react';
import AgregarTarea from './AgregarTarea';
import ListaTareas from './ListaTareas';

// componente principal donde se maneja la lista de tareas y sus acciones
const Tareas = () => {

  // Estado que guarda la lista de tareas, inicialmente vacío  
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    // Copia la lista de tareas actual y añade una nueva tarea con el texto dado y estado "no completada"
    setTareas([...tareas, { texto: tarea, completada: false }]);
  };

  const marcarCompletada = (index) => {
    // Hace una copia de la lista de tareas para no modificar directamente el estado
    const nuevasTareas = [...tareas];
    // Cambia el estado de completada de la tarea en el índice especificado
    nuevasTareas[index].completada = !nuevasTareas[index].completada;
    // Actualiza el estado de la lista de tareas
    setTareas(nuevasTareas);
  };

  const eliminarTarea = (index) => {
    // Filtra las tareas y deja fuera la tarea con el índice especificado
    const nuevasTareas = tareas.filter((_, i) => i !== index);
    // Actualiza el estado con la nueva lista de tareas
    setTareas(nuevasTareas);
  };

  // Renderizado del componente
  return (
    <div>
      <h1>Lista de Tareas</h1>
      {/* Componente para agregar tareas, pasando la función de agregar como prop */}
      <AgregarTarea onAgregar={agregarTarea} />
      {/* Componente que muestra la lista de tareas, pasando las funciones para completar y eliminar */}
      <ListaTareas tareas={tareas} onCompletar={marcarCompletada} onEliminar={eliminarTarea} />
    </div>
  );
};

export default Tareas;
