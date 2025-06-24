import React from 'react';
import './ItemList.css';
import Item from '../Item/Item';

function ItemList({ products }) {
  if (!products || products.length === 0) {
    return <p>No hay productos para mostrar.</p>;
  }

  return (
    <div className="item-list">
      {products.map(prod => (
        <div key={prod.id} className="item-card">
          <Item product={prod} />
        </div>
      ))}
    </div>
  );
}

export default ItemList;
