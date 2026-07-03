# TechnoGaming - AP3 JavaScript Avanzado
Proyecto e-commerce desarrollado con React, Tailwind CSS, React Router DOM, JSON Server y Fetch API.

# Requisitos cubiertos
React con arquitectura basada en componentes.

Navbar reutilizable y footer reutilizable.

Paginas: Home, Productos, Ofertas, Tienda, Contacto, Mi Cuenta, Login, Dashboard y 404.

React Router DOM con ruta comodin para 404.

Dashboard protegido con contexto y LocalStorage.

Login simulado con validaciones basicas y cierre de sesion.

Manejo de estado con useState y useEffect.

Props para comunicacion entre componentes.

Renderizado dinamico con map().

Renderizado condicional con operador ternario y &&.

Formularios con validaciones basicas.

Tailwind CSS: diseño responsive, cards, navbar, formularios, botones y secciones visuales.

JSON Server con db.json.

Servicio React para consumir REST desde API.

## Instalacion
bash
npm install

## Levantar JSON Server (Backend)
bash
npm run json-server

## Levantar React (Frontend)
En otra terminal:

bash
npm start

## Levantar ambos simultaneamente
bash
npm run dev
Abrir `http://localhost:4200`.

## Login de prueba
Se puede ingresar con cualquier correo valido y una clave de minimo 6 caracteres. El usuario se guarda en LocalStorage.

Ejemplo:

- Correo: admin@technogaming.pe

- Clave: 123456

## Despliegue
Para generar la version de produccion:

bash
npm run build

## Repositorio GitHub
https://github.com/Walter-19K/JavaScript-Avanzado-PC3

## Proyecto desplegado
Frontend: https://technogaming-pc3-frontend.onrender.com/

## Backend 
(API): https://technogaming-pc3-backend.onrender.com/