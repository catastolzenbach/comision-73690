import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { cartItems } = useContext(CartContext);
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Link to="/cart" className="cart-button" aria-label="Ver carrito" title="Ver carrito">
      🛒
      {totalQuantity > 0 && (
        <span className="cart-count">
          {totalQuantity}
        </span>
      )}
    </Link>
  );
};

export default CartWidget;
