import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    cartTotalQuantity,
    cartTotalPrice
  } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <h2>El carrito está vacío 🛒</h2>
        <Link to="/">Volver al catálogo</Link>
      </div>
    );
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
            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>

      <hr />
      <h3>Total de productos: {cartTotalQuantity}</h3>
      <h3>Total a pagar: ${cartTotalPrice}</h3>

      <button onClick={clearCart}>Vaciar carrito</button>
      <Link to="/checkout">
        <button>Finalizar compra</button>
      </Link>
    </div>
  );
};

export default Cart;
