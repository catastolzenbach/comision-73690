import React from 'react';
import './NavBar.css'; 
import logo from '../../img/CloserLogoTransp.png'; 
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo" />
            <ul className="nav-links">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/category/ropa">Ropa</Link></li>
                <li><Link to="/category/calzado">Calzado</Link></li>
            </ul>
            <button className="cart-button" aria-label="Ver carrito" title="Ver carrito">🛒</button>
        </nav>
    );
};

export default NavBar;
