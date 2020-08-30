const express = require("express");

const orcamentoController = require("./controller/OrcamentoController");

const sessionController = require("./controller/SessionController");

const routes = express.Router();

routes.get("/");

routes.post("/sessions", sessionController.create);

routes.get("/orcamentos", orcamentoController.index);
routes.post("/orcamentos", orcamentoController.create);
routes.put("/orcamentos/:id", orcamentoController.update);

module.exports = routes;
