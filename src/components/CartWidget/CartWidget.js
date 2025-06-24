import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { cartTotalQuantity } = useContext(CartContext);

  return (
    <Link to="/cart" className="cart-button" aria-label="Ver carrito" title="Ver carrito">
      🛒
      {cartTotalQuantity > 0 && (
        <span className="cart-count">
          {cartTotalQuantity}
        </span>
      )}
    </Link>
  );
};

export default CartWidget;
