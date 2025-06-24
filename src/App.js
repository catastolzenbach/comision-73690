import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../src/components/NavBar/NavBar';
import ItemListContainer from '../src/components/Contenedor/ItemListContainer';
import ItemDetailContainer from '../src/components/Contenedor/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { seedProductsToFirestore } from './components/Data/products';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
      </Routes>
      <button onClick={seedProductsToFirestore}>Subir productos a Firestore</button>
    </BrowserRouter>
  );
}

export default App;
