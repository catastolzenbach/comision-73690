import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../Data/products';
import ItemDetail from '../ItemDetail/itemDetail';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    getProductById(itemId)
      .then((data) => {
        setProducto(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar producto:", error);
        setLoading(false);
      });
  }, [itemId]);

  if (loading) return <p>Cargando detalle del producto...</p>;
  if (!producto) return <p>Producto no encontrado.</p>;

  return (
    <ItemDetail producto={producto} />
  );
};

export default ItemDetailContainer;
