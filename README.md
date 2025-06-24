# E-commerce React SPA

Este proyecto es una Single Page Application (SPA) de e-commerce desarrollada con React. Permite navegar un catálogo de productos, ver detalles, agregar productos al carrito, modificar cantidades y finalizar la compra. Utiliza Firebase Firestore como base de datos para productos y órdenes.

## Características principales
- Listado y detalle de productos
- Carrito de compras con suma, resta y vaciado
- Selección de cantidad por producto
- Navegación por categorías y detalle
- Checkout con registro de orden en Firestore
- Estado global del carrito con Context
- Renderizado condicional (cargando, carrito vacío, etc.)
- Estilos con CSS

## Tecnologías utilizadas
- React
- React Router
- Context API
- Firebase / Firestore
- CSS

## Instalación y uso
1. Clona el repositorio:
   ```bash
   git clone <url-del-repo>
   cd <nombre-del-repo>
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Configura Firebase:
   - Crea un archivo `src/firebase/config.js` con tu configuración de Firebase.
   - Asegúrate de tener una colección `products` en Firestore.
4. Inicia la app:
   ```bash
   npm start
   ```
5. Accede a `http://localhost:3000` en tu navegador.

## Despliegue
Puedes desplegar la app en Vercel, Netlify o cualquier servicio de hosting para React.

## Estructura de componentes recomendada
- App
  - NavBar
    - CartWidget
  - ItemListContainer
    - ItemList
      - Item
  - ItemDetailContainer
    - ItemDetail
      - ItemCount
  - Cart
  - CheckoutForm

## Notas
- Recuerda ocultar tus credenciales de Firebase usando variables de entorno si vas a publicar el código.
- Las órdenes de compra se guardan en la colección `orders` de Firestore.

---
¡Gracias por usar esta app! Si tienes dudas, contacta al desarrollador.
