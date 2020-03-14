const express = require("express");
const message = require("../components/message/network");
const user = require("../components/user/network");
const chat = require("../components/chat/network");
const tipoBarrio = require("../services/1.network/tipoBarrioNetwork");
const area = require('../services/1.network/areaNetwork');
const barrios = require('../services/1.network/barriosNetwork');
const ruta = require('../services/1.network/rutaNetwork');
const tipoVivienda = require('../services/1.network/tipoViviendaNetwork');

const routes = server => {
  server.use("/message", message);
  server.use("/user", user);
  server.use("/chat", chat);
  server.use("/tipoBarrio", tipoBarrio);
  server.use("/area", area);
  server.use('/barrios', barrios);
  server.use('/ruta', ruta);
  server.use('/tipoVivienda',tipoVivienda);
};

module.exports = routes;
