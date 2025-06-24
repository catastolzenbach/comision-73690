import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../Data/products';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const fetch = categoryId ? getProductsByCategory(categoryId) : getProducts();

    fetch.then(data => {
      setProducts(data);
      setLoading(false);
    });
  }, [categoryId]);

  if (loading) return <p>Cargando productos...</p>;

  if (products.length === 0) return <p>No hay productos para mostrar.</p>;

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>{categoryId ? `Categoría: ${categoryId}` : "Todos los productos"}</h2>
      <ItemList products={products} />  {/* ← aquí está el cambio */}
    </div>
  );
};

export default ItemListContainer;
