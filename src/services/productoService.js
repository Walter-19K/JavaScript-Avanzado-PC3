const API_URL = 'https://technogaming-pc3-backend.onrender.com/productos';

export const listarProductos = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    throw error; 
  }
};