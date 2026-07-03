import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { listarProductos } from '../services/productoService';

const Dashboard = () => {
  const { usuario } = useAuth();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const data = await listarProductos();
        setProductos(data);
      } catch (error) {
        console.error('Error al cargar productos en dashboard:', error);
        setProductos([]);
      }
    };
    cargarProductos();
  }, []);

  const valorInventario = productos.reduce(
    (total, producto) => total + producto.precio * producto.stock,
    0
  );
  const stockTotal = productos.reduce((total, producto) => total + producto.stock, 0);

  const formatearPrecio = (valor) => {
    return new Intl.NumberFormat('es-PE', {
      style: 'currency',
      currency: 'PEN',
      minimumFractionDigits: 2,
    }).format(valor);
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-1">Bienvenido, {usuario?.nombre}</h2>
          <p className="text-gray-600">Usuario logueado: {usuario?.correo}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <i className="fas fa-box text-5xl text-blue-600 mb-3"></i>
            <h5 className="text-lg font-semibold mb-2">Productos</h5>
            <p className="text-3xl font-bold">{productos.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <i className="fas fa-chart-bar text-5xl text-green-600 mb-3"></i>
            <h5 className="text-lg font-semibold mb-2">Stock total</h5>
            <p className="text-3xl font-bold">{stockTotal}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <i className="fas fa-coins text-5xl text-yellow-600 mb-3"></i>
            <h5 className="text-lg font-semibold mb-2">Valor inventario</h5>
            <p className="text-3xl font-bold">{formatearPrecio(valorInventario)}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="bg-gray-800 text-white px-6 py-3">
            <h3 className="text-lg font-semibold">Opciones administrativas</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Modulo</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Descripcion</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Estado</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200">
                  <td className="px-6 py-4">Inventario</td>
                  <td className="px-6 py-4">Revision de productos y stock.</td>
                  <td className="px-6 py-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">Activo</span>
                  </td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="px-6 py-4">Ventas</td>
                  <td className="px-6 py-4">Seguimiento de compras simuladas.</td>
                  <td className="px-6 py-4">
                    <span className="bg-gray-500 text-white px-3 py-1 rounded-full text-sm">Basico</span>
                  </td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="px-6 py-4">Usuarios</td>
                  <td className="px-6 py-4">Sesion simulada con LocalStorage.</td>
                  <td className="px-6 py-4">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">Protegido</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;