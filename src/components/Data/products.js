import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

export const products = [
  { id: "1", name: "Camiseta", category: "ropa", price: 10990, description: "Camiseta algodón" },
  { id: "2", name: "Pantalón", category: "ropa", price: 20990, description: "Pantalón casual" },
  { id: "3", name: "Zapatos", category: "calzado", price: 30980, description: "Zapatos de cuero" },
  { id: "4", name: "Polera", category: "ropa", price: 35990, description: "Polera de algodón básica y cómoda" },
  { id: "5", name: "Chaqueta", category: "ropa", price: 45990, description: "Chaqueta impermeable para invierno" },
  { id: "6", name: "Vestido", category: "ropa", price: 25990, description: "Vestido veraniego estampado" },
  { id: "7", name: "Zapatillas deportivas", category: "calzado", price: 39990, description: "Zapatillas cómodas para correr" },
  { id: "8", name: "Botines", category: "calzado", price: 34990, description: "Botines de cuero para vestir" },
  { id: "9", name: "Sandalias", category: "calzado", price: 15990, description: "Sandalias frescas para verano" },
  { id: "10", name: "Short", category: "ropa", price: 14990, description: "Short de algodón para deporte" },
  { id: "11", name: "Tacones", category: "calzado", price: 28990, description: "Tacones elegantes para ocasiones especiales" },
  { id: "12", name: "Botas", category: "calzado", price: 37990, description: "Botas altas de cuero para invierno" },
].sort((a, b) => a.name.localeCompare(b.name));

export const getProducts = () =>
  new Promise(resolve => setTimeout(() => resolve(products), 1000));

export const getProductById = (id) =>
  new Promise(resolve =>
    setTimeout(() => resolve(products.find(prod => prod.id === id)), 1000)
  );

export const getProductsByCategory = (category) =>
  new Promise(resolve =>
    setTimeout(() => resolve(products.filter(prod => prod.category === category)), 1000)
  );

export const seedProductsToFirestore = async () => {
  for (const prod of products) {
    // Elimina el id para que Firestore lo genere automáticamente
    const { id, ...data } = prod;
    await addDoc(collection(db, "products"), data);
  }
  alert('Productos subidos a Firestore');
};
  