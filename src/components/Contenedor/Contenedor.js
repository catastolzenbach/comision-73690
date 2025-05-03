import React from 'react';
import './Contenedor.css';

const Contenedor = (props) => {
    return (
        <div className="contenedor">
            <h1>{props.mensajeBienvenida}</h1>
        </div>
    );
}

export default Contenedor;
