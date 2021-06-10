const { Router } = require("express");
const comentarios = Router();
const loginController = require("../controllers/loginController");
const logincontroller = new loginController();

comentarios.get("/", async (request, response) => {
  const items = await logincontroller.index();
  return response.json(items);
  //             response.json({ testando: "jjh"  });
  //xsaxaaxa
});

module.exports = comentarios;
