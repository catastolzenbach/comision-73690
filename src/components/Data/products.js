const products = [
    { id: "1", name: "Camiseta", category: "ropa", price: 100, description: "Camiseta 100% algodón" },
    { id: "2", name: "Pantalón", category: "ropa", price: 200, description: "Pantalón casual" },
    { id: "3", name: "Zapatos", category: "calzado", price: 300, description: "Zapatos de cuero" },
  ];
  
  export const getProducts = () =>
    new Promise(resolve => setTimeout(() => resolve(products), 1000));
  
  export const getProductById = (id) =>
    new Promise(resolve =>
      setTimeout(() => resolve(products.find(p => p.id === id)), 1000)
    );
  
  export const getProductsByCategory = (category) =>
    new Promise(resolve =>
      setTimeout(() => resolve(products.filter(p => p.category === category)), 1000)
    );
  