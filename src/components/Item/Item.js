import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const Item = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <Link to={`/item/${product.id}`}>Ver Detalle</Link>
      <button onClick={() => addToCart(product)}>Agregar al carrito</button>
    </div>
  );
};

export default Item;
