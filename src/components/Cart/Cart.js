import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, decreaseQuantity } = useContext(CartContext);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return <div className="cart-container"><h2>El carrito está vacío</h2></div>;
  }

  return (
    <div className="cart-container">
      <h2>Tu Carrito</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <span>{item.name}</span>
            <span>Cantidad: {item.quantity}</span>
            <span>Precio: ${item.price}</span>
            <span>Subtotal: ${item.price * item.quantity}</span>
            <button onClick={() => decreaseQuantity(item.id)} style={{marginLeft: '10px'}}>-</button>
            <button onClick={() => removeFromCart(item.id)} style={{marginLeft: '10px'}}>Eliminar</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${total}</h3>

      {/* Aquí van botones de acción */}
      <button>Finalizar compra</button>
      <button>Vaciar carrito</button>
    </div>
  );
};

export default Cart;
