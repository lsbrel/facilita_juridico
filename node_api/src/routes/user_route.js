const bodyparser = require("body-parser");

module.exports = (app) => {
  /** BUSCA TODOS OS DADOS */
  app.get("/user", (req, res) => {
    app.src.controllers.user_controller.index(app, req, res);
  });
  /** BUSCA TODOS OS DADOS */

  /** BUSCA DADOS DE UM ID ESPECIFICO */
  app.get("/user/:id", (req, res) => {
    app.src.controllers.user_controller.show(app, req, res);
  });
  /** BUSCA DADOS DE UM ID ESPECIFICO */

  /** INSERE DADOS DE USUARIO EM BANCO */
  app.post("/user", bodyparser.json(), (req, res) => {
    app.src.controllers.user_controller.post(app, req, res);
  });
  /** INSERE DADOS DE USUARIO EM BANCO */

  /** ATUALIZA DADOS DE UM USUARIO */
  app.put("/user/:id", bodyparser.json(), (req, res) => {
    app.src.controllers.user_controller.put(app, req, res);
  });
  /** ATUALIZA DADOS DE UM USUARIO */

  /** DELETAR REGISTRO DE USUARIO */
  app.delete("/user/:id", (req, res) => {
    app.src.controllers.user_controller.delete(app, req, res);
  });
  /** DELETAR REGISTRO DE USUARIO */
};
