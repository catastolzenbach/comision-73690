import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import ItemCount from './itemCount';
import './itemDetail.css';

const ItemDetail = ({ producto }) => {
  const { addToCart } = useContext(CartContext);
  const [agregado, setAgregado] = useState(false);

  const handleAdd = (cantidad) => {
    addToCart(producto, cantidad);
    setAgregado(true);
  };

  return (
    <div className="item-detail">
      <h2>{producto.name}</h2>
      <p>{producto.description}</p>
      <p>Precio: ${producto.price}</p>
      <p>Categoría: {producto.category}</p>

      {!agregado ? (
        <ItemCount stock={10} initial={1} onAdd={handleAdd} />
      ) : (
        <p>✅ Producto agregado al carrito</p>
      )}
    </div>
  );
};

export default ItemDetail;
