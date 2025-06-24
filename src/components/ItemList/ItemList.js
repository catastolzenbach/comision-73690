import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ productos }) => {
  if (!productos || productos.length === 0) {
    return <p>No hay productos para mostrar.</p>;
  }

  return (
    <div className="item-list">
      {productos.map(prod => (
        <Item key={prod.id} producto={prod} />
      ))}
    </div>
  );
};

export default ItemList;
