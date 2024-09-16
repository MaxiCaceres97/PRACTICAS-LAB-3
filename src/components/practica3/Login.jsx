import React, { useState } from 'react';

// Define componente Login, este será utilizado en la interfaz.
const Login = () => {

  // se declara una variable de estado username y una función setUsername que permite actualizar ese estado.  
  // useState('') inicializa el valor de username como una cadena vacía (''), que representará el valor del campo de texto (input).
  const [username, setUsername] = useState('');

  // funcion que se ejecuta cada vez que el usuario escribe en el campo input.
  const handleChange = (e) => {
    const value = e.target.value; // captura el valor actual del campo.
    setUsername(value); // actualiza el estado username con el nuevo valor ingresado.
    
    // Verificar si contiene la letra "o" o "O" con metodo "includes".
    if (value.includes('o') || value.includes('O')) {
      alert('Por favor, ¡Nombres de usuario sin la letra o!');
    }
  };

  // funcion que se ejecuta cuando el usuario hace clic en el botón "Registrarse".
  const handleRegister = () => {
    // Verificar si el nombre de usuario está vacío o contiene "o" u "O"
    if (!username || username.includes('o') || username.includes('O')) {
      alert('Usuario inválido para registrarse');
    } else {
      alert('¡Usuario registrado correctamente!');
    }
  };

  // Se retorna el JSX que define la estructura del componente Login.
  return (
    <div>
      <h2>Registro de Usuario</h2>
      <input 
        type="text" 
        placeholder="Ingresa tu nombre de usuario"
        value={username} // El valor del input está vinculado a la variable de estado username, 
        onChange={handleChange} // y se actualiza con handleChange cada vez que el usuario escribe algo.
      />
      <button onClick={handleRegister}>Registrarse</button> 
      <p>Nombre de usuario ingresado: {username}</p>
    </div>
  );
} 

export default Login;
