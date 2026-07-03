const jsonServer = require('json-server');
const express = require('express');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 3000;

server.use(middlewares);

server.use('/assets', express.static(path.join(__dirname, 'public/assets')));

server.use(router);

server.listen(port, () => {
  console.log(` JSON Server corriendo en el puerto ${port}`);
  console.log(` Ruta de productos: http://localhost:${port}/productos`);
});