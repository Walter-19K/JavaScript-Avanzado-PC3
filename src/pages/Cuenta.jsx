import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Cuenta = () => {
  const { usuario } = useAuth();

  const formatearFecha = (fecha) => {
    return new Intl.DateTimeFormat('es-PE', {
      dateStyle: 'full',
      timeStyle: 'medium',
    }).format(new Date(fecha));
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Mi Cuenta</h2>
        
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            {usuario ? (
              <div className="bg-white rounded-lg shadow p-6">
                <h4 className="text-xl font-bold mb-4">Datos del usuario</h4>
                <p className="mb-2">
                  <strong>Nombre:</strong> {usuario.nombre}
                </p>
                <p className="mb-2">
                  <strong>Correo:</strong> {usuario.correo}
                </p>
                <p>
                  <strong>Ultimo acceso:</strong> {formatearFecha(usuario.fechaLogin)}
                </p>
              </div>
            ) : (
              <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded text-center">
                No has iniciado sesion. <Link to="/login" className="text-blue-600 hover:underline">Ir al login</Link>.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cuenta;