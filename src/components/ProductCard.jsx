import React from 'react';

const ProductCard = ({ producto, onAgregarAlCarrito }) => {
  const { nombre, imagen, categoria, precio, stock } = producto; 

  const formatearPrecio = (valor) => {
    return new Intl.NumberFormat('es-PE', {
      style: 'currency',
      currency: 'PEN',
      minimumFractionDigits: 2,
    }).format(valor);
  };

  return (
    <div className="col-span-1">
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-200 overflow-hidden h-full flex flex-col card-hover">
        <img
          className="w-full h-56 object-cover"
          src={imagen}
          alt={nombre}
          onError={(e) => (e.target.src = '/assets/img/default-placeholder.png')}
        />
        <div className="p-4 flex flex-col flex-grow">
          <h5 className="text-lg font-semibold text-gray-800 mb-1">{nombre.toUpperCase()}</h5>
          <p className="text-sm text-gray-600 mb-2">Categoria: {categoria.toLowerCase()}</p>
          <p className="text-xl font-bold text-blue-600 mb-2">{formatearPrecio(precio)}</p>
          
          <p className="text-sm font-bold" style={{ color: stock <= 5 ? '#dc3545' : '#198754' }}>
            Stock: {stock}
          </p>
          
          <span className={`inline-block px-3 py-1 rounded-full text-white text-xs font-semibold mb-3 w-fit ${
            stock <= 5 ? 'bg-red-500' : 'bg-green-600'
          }`}>
            {stock <= 5 ? 'Stock bajo' : 'Disponible'}
          </span>
          
          <button
            className={`mt-auto w-full py-2 rounded-lg transition font-medium ${
              stock === 0 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
            type="button"
            disabled={stock === 0}
            onClick={() => onAgregarAlCarrito(producto)}
          >
            <i className="fas fa-cart-plus mr-2"></i> Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;