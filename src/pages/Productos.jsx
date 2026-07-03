import React, { useState, useEffect } from 'react';
import { listarProductos } from '../services/productoService';
import ProductCard from '../components/ProductCard';

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas');
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');
  const [fechaConsulta] = useState(new Date());

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const data = await listarProductos();
        setProductos(data);
        setCargando(false);
      } catch (err) {
        setError('No se pudo conectar con JSON Server. Ejecuta npm run json-server.');
        setCargando(false);
      }
    };
    cargarProductos();
  }, []);

  const agregarAlCarrito = (producto) => {
    const itemExistente = carrito.find((item) => item.id === producto.id);
    if (itemExistente) {
      if (itemExistente.cantidad < producto.stock) {
        const nuevoCarrito = carrito.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
        setCarrito(nuevoCarrito);
      }
      return;
    }
    setCarrito([...carrito, { ...producto, cantidad: 1 }]);
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter((item) => item.id !== id));
  };

  const subtotal = carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);
  const descuento = subtotal > 1000 ? subtotal * 0.1 : 0;
  const total = subtotal - descuento;

  const finalizarCompra = () => {
    alert(`Compra registrada. Total: S/ ${total.toFixed(2)}`);
    setCarrito([]);
  };

  const categorias = ['Todas', ...new Set(productos.map((p) => p.categoria))];

  const productosFiltrados = productos.filter((producto) => {
    const coincideBusqueda = producto.nombre.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCategoria =
      categoriaSeleccionada === 'Todas' || producto.categoria === categoriaSeleccionada;
    return coincideBusqueda && coincideCategoria;
  });

  const formatearPrecio = (valor) => {
    return new Intl.NumberFormat('es-PE', {
      style: 'currency',
      currency: 'PEN',
      minimumFractionDigits: 2,
    }).format(valor);
  };

  const formatearFecha = (fecha) => {
    return new Intl.DateTimeFormat('es-PE', {
      dateStyle: 'medium',
      timeStyle: 'short',
    }).format(fecha);
  };

  if (cargando) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded">
            <p>Cargando productos desde JSON Server...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded">
            <p>{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">Productos</h2>
          <p className="text-center text-gray-600 mb-8">
            Ultima consulta: {formatearFecha(fechaConsulta)}
          </p>

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="md:w-2/3">
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Buscar producto"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />
            </div>
            <div className="md:w-1/3">
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={categoriaSeleccionada}
                onChange={(e) => setCategoriaSeleccionada(e.target.value)}
              >
                {categorias.map((categoria) => (
                  <option key={categoria} value={categoria}>
                    {categoria}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productosFiltrados.length === 0 ? (
              <div className="col-span-full">
                <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded">
                  No hay productos que coincidan con la busqueda.
                </div>
              </div>
            ) : (
              productosFiltrados.map((producto) => (
                <ProductCard
                  key={producto.id}
                  producto={producto}
                  onAgregarAlCarrito={agregarAlCarrito}
                />
              ))
            )}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            <i className="fas fa-shopping-cart mr-2"></i> Carrito de Compras
          </h2>
          
          <div className="bg-white rounded-lg shadow overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="px-6 py-3 text-left">Producto</th>
                  <th className="px-6 py-3 text-left">Precio</th>
                  <th className="px-6 py-3 text-left">Cantidad</th>
                  <th className="px-6 py-3 text-left">Subtotal</th>
                  <th className="px-6 py-3 text-left">Accion</th>
                </tr>
              </thead>
              <tbody>
                {carrito.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                      El carrito esta vacio
                    </td>
                  </tr>
                ) : (
                  carrito.map((item) => (
                    <tr key={item.id} className="border-b border-gray-200">
                      <td className="px-6 py-4">{item.nombre}</td>
                      <td className="px-6 py-4">{formatearPrecio(item.precio)}</td>
                      <td className="px-6 py-4">{item.cantidad}</td>
                      <td className="px-6 py-4">{formatearPrecio(item.precio * item.cantidad)}</td>
                      <td className="px-6 py-4">
                        <button
                          className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded transition text-sm"
                          type="button"
                          onClick={() => eliminarDelCarrito(item.id)}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
              <tfoot className="bg-gray-50">
                <tr className="font-bold">
                  <td colSpan="3" className="px-6 py-4 text-right">
                    Descuento:
                  </td>
                  <td className="px-6 py-4">{formatearPrecio(descuento)}</td>
                  <td></td>
                </tr>
                <tr className="font-bold text-lg">
                  <td colSpan="3" className="px-6 py-4 text-right">
                    Total:
                  </td>
                  <td className="px-6 py-4">{formatearPrecio(total)}</td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
          
          <div className="flex justify-end mt-6">
            <button
              className={`px-8 py-3 rounded-lg text-white font-semibold transition ${
                carrito.length === 0 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-green-600 hover:bg-green-700'
              }`}
              type="button"
              disabled={carrito.length === 0}
              onClick={finalizarCompra}
            >
              Finalizar Compra
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Productos;