import React from 'react';
import './NavBar.css'; 
import logo from '../../img/CloserLogoTransp.png'; 
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';  // Importa el componente

const NavBar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo" />
            <ul className="nav-links">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/category/ropa">Ropa</Link></li>
                <li><Link to="/category/calzado">Calzado</Link></li>
            </ul>
            <CartWidget /> {/* Usa el componente en vez del botón directo */}
        </nav>
    );
};

export default NavBar;
