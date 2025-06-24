export const productos = [
  {
    id: '1',
    nombre: 'Vestido Rojo',
    descripcion: 'Vestido elegante para fiesta.',
    precio: 29900,
    stock: 10,
    categoria: 'vestidos'
  },
  {
    id: '2',
    nombre: 'Blusa Negra',
    descripcion: 'Blusa casual con mangas largas.',
    precio: 15900,
    stock: 5,
    categoria: 'blusas'
  }
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 500);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.find(prod => prod.id === id));
    }, 500);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.filter(prod => prod.categoria === category));
    }, 500);
  });
};
