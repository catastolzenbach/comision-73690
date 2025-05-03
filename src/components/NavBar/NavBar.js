import React from 'react';
import './NavBar.css'; 
import logo from '../../img/CloserLogoTransp.png'; 

const NavBar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo" />
            <ul className="nav-links">
                <li><button>Inicio</button></li>
                <li><button>Productos</button></li>
                <li><button>Contacto</button></li>
            </ul>
            <button className="cart-button">🛒</button> {/* Este es el botón para el carrito */}
        </nav>
    );
};

export default NavBar;
