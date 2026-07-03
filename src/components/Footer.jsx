import React from 'react';

const Footer = () => {
  const anio = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white text-center py-4 mt-auto">
      <p className="text-sm">&copy; {anio} TechnoGaming. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;