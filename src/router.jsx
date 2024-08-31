import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Practica1 from './components/practica1/Practica1';
import Practica2 from './components/practica2/Practica2';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/practica1" element={<Practica1 />} />
        <Route path="/practica2" element={<Practica2 />} />
        {/* Agrega más rutas según sea necesario */}
      </Routes>
    </Router>
  );
};

export default AppRouter;