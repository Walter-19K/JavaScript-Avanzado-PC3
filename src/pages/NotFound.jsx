import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-8xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-4">Pagina no encontrada</h2>
        <p className="text-gray-600 mb-8">La ruta solicitada no existe dentro de TechnoGaming.</p>
        <Link 
          to="/home" 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition font-medium"
        >
          Volver al Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;