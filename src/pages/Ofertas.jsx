import React from 'react';

const Ofertas = () => {
  const ofertas = [
    { titulo: '10% de descuento', detalle: 'En compras mayores a S/ 1000' },
    { titulo: 'Envio gratis', detalle: 'Para laptops y monitores seleccionados' },
    { titulo: 'Combo gamer', detalle: 'Teclado mecanico + mouse inalambrico' },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Ofertas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ofertas.map((oferta, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-xl transition p-6 text-center card-hover">
              <i className="fas fa-tag text-5xl text-red-500 mb-4"></i>
              <h5 className="text-xl font-semibold mb-2">{oferta.titulo}</h5>
              <p className="text-gray-600">{oferta.detalle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ofertas;