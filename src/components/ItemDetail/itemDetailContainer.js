import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { getProducts } from '../../data/products';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    getProducts().then((data) => {
      const productosFiltrados = categoryId
        ? data.filter(prod => prod.categoria === categoryId)
        : data;

      setProductos(productosFiltrados);
      setLoading(false);
    });
  }, [categoryId]);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div>
      <h2>Catálogo</h2>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
