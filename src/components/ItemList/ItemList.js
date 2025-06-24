import React from 'react';

function ItemList({ products }) {
  if (!products || products.length === 0) {
    return <p>No hay productos para mostrar.</p>;
  }

  return (
    <div>
      {products.map(prod => (
        <div key={prod.id}>
          <h3>{prod.name}</h3>
          <p>{prod.description}</p>
          <p>Precio: ${prod.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
