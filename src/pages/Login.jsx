import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const [credenciales, setCredenciales] = useState({ correo: '', password: '' });
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredenciales({ ...credenciales, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { correo, password } = credenciales;

    const loginCorrecto = login(correo, password);

    if (!loginCorrecto) {
      setError('Ingresa un correo valido y una clave de minimo 6 caracteres.');
      return;
    }

    setError('');
    navigate('/dashboard');
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <form className="bg-white rounded-lg shadow p-6" onSubmit={handleSubmit}>
              <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
              
              {error && (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded mb-4">
                  {error}
                </div>
              )}

              <div className="mb-4">
                <label htmlFor="correo" className="block text-sm font-medium text-gray-700 mb-1">
                  Correo electronico
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="correo"
                  name="correo"
                  value={credenciales.correo}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Contrasena
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  id="password"
                  name="password"
                  value={credenciales.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition font-medium"
              >
                Iniciar sesion
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;