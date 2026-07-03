import React from 'react';

const Tienda = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Tienda</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h4 className="text-xl font-bold mb-4">Sede principal</h4>
            <p className="flex items-center gap-2 text-gray-700 mb-2">
              <i className="fas fa-map-marker-alt text-blue-600"></i>
              Av. Tecnologica 456, Lima, Peru
            </p>
            <p className="flex items-center gap-2 text-gray-700 mb-2">
              <i className="fas fa-clock text-blue-600"></i>
              Lunes a Sabado, 9:00 AM - 7:00 PM
            </p>
            <p className="flex items-center gap-2 text-gray-700">
              <i className="fas fa-shield-alt text-blue-600"></i>
              Productos originales con garantia.
            </p>
          </div>

          <div className="bg-gray-800 text-white rounded-lg shadow p-6">
            <h4 className="text-xl font-bold mb-4">Servicios</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                Venta de laptops, monitores y perifericos.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                Asesoria para equipos de oficina y gaming.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                Atencion postventa y garantia.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tienda;