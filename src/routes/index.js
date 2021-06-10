const { Router } = require("express");
const comentarios = require("./comentariosrouter");

const routes = Router();
console.log("codigo chegou aqui 2");
routes.use("/comentarios", comentarios);

module.exports = routes;
