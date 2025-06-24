import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { db } from '../../firebase/config';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { Link } from 'react-router-dom';

const CheckoutForm = () => {
  const { cartItems, cartTotalPrice, clearCart } = useCart();

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [ordenId, setOrdenId] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orden = {
      cliente: {
        nombre,
        email,
        telefono
      },
      items: cartItems,
      total: cartTotalPrice,
      fecha: Timestamp.now()
    };

    try {
      const docRef = await addDoc(collection(db, 'ordenes'), orden);
      setOrdenId(docRef.id);
      clearCart();
    } catch (error) {
      console.error('Error al generar la orden', error);
    }
  };

  if (ordenId) {
    return (
      <div>
        <h2>¡Gracias por tu compra! 🎉</h2>
        <p>Tu código de orden es: <strong>{ordenId}</strong></p>
        <Link to="/">Volver al inicio</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Finalizar compra</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Teléfono:</label>
          <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
        </div>
        <button type="submit">Confirmar compra</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
