import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Practica1 from './components/practica1/Practica1';
import Practica2 from './components/practica2/Practica2';
import Login from './components/practica3/Login';
import Tareas from './components/practica4/Tareas';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/practica1" element={<Practica1 />} />
        <Route path="/practica2" element={<Practica2 />} />
        <Route path="/practica3" element={<Login />} />
        <Route path="/practica4" element={<Tareas />} />
        
        {/* Agrega más rutas según sea necesario */}
      </Routes>
    </Router>
  );
};

export default AppRouter;