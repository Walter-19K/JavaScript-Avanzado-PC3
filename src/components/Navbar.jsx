import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { logout, estaAutenticado } = useAuth();
  const navigate = useNavigate();
  const [menuAbierto, setMenuAbierto] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/home');
    setMenuAbierto(false);
  };

  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <nav className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <Link to="/home" className="flex items-center gap-2 text-xl font-bold hover:text-gray-300 transition" onClick={cerrarMenu}>
            <i className="fas fa-microchip"></i>
            <span>TechnoGaming</span>
          </Link>

          <button
            className="lg:hidden text-white hover:text-gray-300 focus:outline-none"
            type="button"
            onClick={() => setMenuAbierto(!menuAbierto)}
            aria-label="Abrir menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className="hidden lg:flex items-center space-x-6">
            <Link to="/home" className="hover:text-gray-300 transition">Home</Link>
            <Link to="/productos" className="hover:text-gray-300 transition">Productos</Link>
            <Link to="/ofertas" className="hover:text-gray-300 transition">Ofertas</Link>
            <Link to="/tienda" className="hover:text-gray-300 transition">Tienda</Link>
            <Link to="/contacto" className="hover:text-gray-300 transition">Contacto</Link>
            <Link to="/mi-cuenta" className="hover:text-gray-300 transition">Mi Cuenta</Link>
            
            {estaAutenticado() && (
              <Link to="/dashboard" className="hover:text-gray-300 transition">Dashboard</Link>
            )}
            
            {!estaAutenticado() ? (
              <Link to="/login" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
                Login
              </Link>
            ) : (
              <button onClick={handleLogout} className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 py-2 rounded-lg transition font-medium">
                Cerrar sesion
              </button>
            )}
          </div>
        </div>

        {menuAbierto && (
          <div className="lg:hidden py-4 border-t border-gray-700 flex flex-col space-y-3">
            <Link to="/home" className="hover:text-gray-300 transition" onClick={cerrarMenu}>Home</Link>
            <Link to="/productos" className="hover:text-gray-300 transition" onClick={cerrarMenu}>Productos</Link>
            <Link to="/ofertas" className="hover:text-gray-300 transition" onClick={cerrarMenu}>Ofertas</Link>
            <Link to="/tienda" className="hover:text-gray-300 transition" onClick={cerrarMenu}>Tienda</Link>
            <Link to="/contacto" className="hover:text-gray-300 transition" onClick={cerrarMenu}>Contacto</Link>
            <Link to="/mi-cuenta" className="hover:text-gray-300 transition" onClick={cerrarMenu}>Mi Cuenta</Link>
            
            {estaAutenticado() && (
              <Link to="/dashboard" className="hover:text-gray-300 transition" onClick={cerrarMenu}>Dashboard</Link>
            )}
            
            {!estaAutenticado() ? (
              <Link to="/login" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition text-center" onClick={cerrarMenu}>
                Login
              </Link>
            ) : (
              <button onClick={handleLogout} className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-4 py-2 rounded-lg transition font-medium">
                Cerrar sesion
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;