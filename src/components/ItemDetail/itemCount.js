import React, { useState } from 'react';

const ItemCount = ({ stock, initial = 1, onAdd }) => {
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
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px' }}>
        <button onClick={decrementar}>-</button>
        <span>{cantidad}</span>
        <button onClick={incrementar}>+</button>
      </div>
      <button onClick={() => onAdd(cantidad)} disabled={stock === 0}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
