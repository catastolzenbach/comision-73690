import React, { useState } from 'react';
import ItemCount from './itemCount';
import { useCart } from '../../context/CartContext';

const ItemDetail = ({ producto }) => {
  const [agregado, setAgregado] = useState(false);
  const { addToCart } = useCart();

  const handleAgregar = (cantidad) => {
    const itemConCantidad = { ...producto, quantity: cantidad };
    addToCart(itemConCantidad);
    setAgregado(true);
  };

  return (
    <div>
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <p>Precio: ${producto.precio}</p>
      <p>Stock: {producto.stock}</p>

      {agregado ? (
        <p>Producto agregado al carrito ✅</p>
      ) : (
        <ItemCount stock={producto.stock} onAdd={handleAgregar} />
      )}
    </div>
  );
};

export default ItemDetail;
