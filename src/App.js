import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Contenedor/ItemListContainer';
import ItemDetailContainer from './components/Contenedor/ItemDetailContainer';
import Cart from './components/Cart/Cart';

// Importa el provider del carrito
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
