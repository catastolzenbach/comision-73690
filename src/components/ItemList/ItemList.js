import React from 'react';
import './ItemList.css';

function ItemList({ products }) {
  if (!products || products.length === 0) {
    return <p>No hay productos para mostrar.</p>;
  }

  return (
    <div className="item-list">
      {products.map(prod => (
        <div key={prod.id} className="item-card">
          <h3>{prod.name}</h3>
          <p>{prod.description}</p>
          <p>Precio: ${prod.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
