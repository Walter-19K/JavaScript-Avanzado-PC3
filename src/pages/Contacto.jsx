import React, { useState } from 'react';

const Contacto = () => {
  const [contacto, setContacto] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContacto({ ...contacto, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setContacto({ nombre: '', correo: '', mensaje: '' });
    setTimeout(() => setEnviado(false), 3000);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contacto</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg shadow p-6 text-center">
                <i className="fas fa-map-marker-alt text-4xl text-blue-600 mb-3"></i>
                <h5 className="font-semibold mb-1">Direccion</h5>
                <p className="text-gray-600 text-sm">Av. Tecnologica 456, Lima, Peru</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6 text-center">
                <i className="fas fa-phone text-4xl text-blue-600 mb-3"></i>
                <h5 className="font-semibold mb-1">Telefono</h5>
                <p className="text-gray-600 text-sm">+51 987 654 321</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6 text-center">
                <i className="fas fa-envelope text-4xl text-blue-600 mb-3"></i>
                <h5 className="font-semibold mb-1">Correo</h5>
                <p className="text-gray-600 text-sm">ventas@technogaming.pe</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6 text-center">
                <i className="fas fa-clock text-4xl text-blue-600 mb-3"></i>
                <h5 className="font-semibold mb-1">Horario</h5>
                <p className="text-gray-600 text-sm">Lunes a Sabado</p>
                <p className="text-gray-600 text-sm">9:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>

          <div>
            <form className="bg-white rounded-lg shadow p-6" onSubmit={handleSubmit}>
              {enviado && (
                <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded mb-4">
                  Mensaje enviado correctamente.
                </div>
              )}
              
              <div className="mb-4">
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="nombre"
                  name="nombre"
                  value={contacto.nombre}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="correo" className="block text-sm font-medium text-gray-700 mb-1">
                  Correo
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="correo"
                  name="correo"
                  value={contacto.correo}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="mensaje"
                  name="mensaje"
                  rows="4"
                  value={contacto.mensaje}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition font-medium"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;