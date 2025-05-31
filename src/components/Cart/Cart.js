import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './Cart.css'; // Aquí pondremos estilos específicos para el carrito

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  if (cartItems.length === 0) {
    return <h2>El carrito está vacío</h2>;
  }

  return (
    <div className="cart-container">
      <h2>Tu Carrito</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id} className="cart-item">
            <span>{item.name}</span>
            <span>Cantidad: {item.quantity}</span>
            <span>Precio: ${item.price}</span>
            <span>Total: ${item.price * item.quantity}</span>
          </li>
        ))}
      </ul>
      {/* Puedes agregar botón de checkout o limpiar carrito aquí */}
    </div>
  );
};

export default Cart;
