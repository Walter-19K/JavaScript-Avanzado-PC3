import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const titulo = 'TechnoGaming';
  const subtitulo = 'Todo en tecnologia para tu hogar y oficina';
  const imagenNosotros = '/assets/img/nosotros.jpg';

  const bannerStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.62), rgba(0, 0, 0, 0.62)), url('/assets/img/banner.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '500px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  return (
    <>
      <section className="text-white text-center py-20" style={bannerStyle}>
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{titulo}</h1>
          <p className="text-xl md:text-2xl mb-6">{subtitulo}</p>
          <p className="text-lg mb-8">PCs, laptops, pantallas, componentes y mas</p>
          <Link 
            to="/productos" 
            className="inline-block bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition text-lg"
          >
            Ver Productos
          </Link>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nosotros</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <p className="text-lg mb-4">
                TechnoGaming nace con la mision de brindar tecnologia de calidad al mejor precio.
              </p>
              <p className="text-lg">
                Trabajamos con proveedores oficiales para garantizar productos originales y con garantia.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src={imagenNosotros}
                alt="Nosotros TechnoGaming"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;