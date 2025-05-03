import React from 'react';
import NavBar from './components/NavBar/NavBar'; 
import Contenedor from './components/Contenedor/Contenedor'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Contenedor mensajeBienvenida="¡Bienvenido a nuestra tienda!" />
    </div>
  );
}

export default App;
