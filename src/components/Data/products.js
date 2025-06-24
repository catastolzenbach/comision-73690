export const products = [
  { id: "1", name: "Camiseta", category: "ropa", price: 10990, description: "Camiseta algodón" },
  { id: "2", name: "Pantalón", category: "ropa", price: 20990, description: "Pantalón casual" },
  { id: "3", name: "Zapatos", category: "calzado", price: 30980, description: "Zapatos de cuero" },
  { id: "4", name: "Polera", category: "ropa", price: 35990, description: "Polera de algodón básica y cómoda" },
];

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
  