import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

const STORAGE_KEY = 'technogaming_usuario';

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const usuarioStorage = localStorage.getItem(STORAGE_KEY);
    if (usuarioStorage) {
      try {
        setUsuario(JSON.parse(usuarioStorage));
      } catch (error) {
        console.error('Error al parsear usuario:', error);
        localStorage.removeItem(STORAGE_KEY);
      }
    }
    setLoading(false);
  }, []);

  const login = (correo, password) => {
    if (!correo.includes('@') || password.trim().length < 6) {
      return false;
    }

    const nuevoUsuario = {
      nombre: correo.split('@')[0],
      correo,
      fechaLogin: new Date().toISOString(),
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(nuevoUsuario));
    setUsuario(nuevoUsuario);
    return true;
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setUsuario(null);
  };

  const estaAutenticado = () => {
    return !!usuario;
  };

  return (
    <AuthContext.Provider value={{ usuario, login, logout, estaAutenticado, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};