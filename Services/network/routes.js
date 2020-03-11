const express = require("express");
const message = require("../components/message/network");
const user = require("../components/user/network");
const chat = require("../components/chat/network");
const tipoBarrio = require("../services/1.network/tipoBarrioNetwork");
const routes = server => {
  server.use("/message", message);
  server.use("/user", user);
  server.use("/chat", chat);
  server.use("/tipoBarrio", tipoBarrio)
};

module.exports = routes;
