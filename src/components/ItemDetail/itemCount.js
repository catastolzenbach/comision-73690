import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);

  const incrementar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const decrementar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div>
      <div style={{ marginBottom: "10px" }}>
        <button onClick={decrementar}>−</button>
        <span style={{ margin: "0 10px" }}>{cantidad}</span>
        <button onClick={incrementar}>+</button>
      </div>
      <button onClick={() => onAdd(cantidad)}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
