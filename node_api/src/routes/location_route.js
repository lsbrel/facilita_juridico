const bodyparser = require("body-parser");
const { bodyValidator, paramsValidator } = require("../requests/user_request.js");

module.exports = (app) => {
  /** BUSCA TODOS OS DADOS */
  app.get("/location", (req, res) => {
    app.src.controllers.location_controller.index(app, req, res);
  });
  /** BUSCA TODOS OS DADOS */

  /** BUSCA DADOS DE UM ID ESPECIFICO */
  app.get("/location/:id", paramsValidator, (req, res) => {
    app.src.controllers.location_controller.show(app, req, res);
  });
  /** BUSCA DADOS DE UM ID ESPECIFICO */

  /** INSERE DADOS DE USUARIO EM BANCO */
  app.post("/location", bodyparser.json(), bodyValidator, (req, res) => {
    app.src.controllers.location_controller.post(app, req, res);
  });
  /** INSERE DADOS DE USUARIO EM BANCO */

  /** ATUALIZA DADOS DE UM USUARIO */
  app.put(
    "/location/:id",
    bodyparser.json(),
    paramsValidator,
    bodyValidator,
    (req, res) => {
      app.src.controllers.location_controller.put(app, req, res);
    }
  );
  /** ATUALIZA DADOS DE UM USUARIO */

  /** DELETAR REGISTRO DE USUARIO */
  app.delete("/location/:id", paramsValidator, (req, res) => {
    app.src.controllers.location_controller.delete(app, req, res);
  });
  /** DELETAR REGISTRO DE USUARIO */
};
