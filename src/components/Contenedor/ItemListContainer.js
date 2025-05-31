import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../Data/products';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const fetch = categoryId ? getProductsByCategory(categoryId) : getProducts();
    fetch.then(setProducts);
  }, [categoryId]);

  return (
    <div className="App-content">
      <h2>{categoryId ? `Categoría: ${categoryId}` : "Bienvenido a nuestra tienda"}</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
