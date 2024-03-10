const usuario = require("../models/user");

module.exports.index = async (app, req, res) => {
  return res.send(await usuario.all());
};

module.exports.show = async (app, req, res) => {
  return res.send(await usuario.findById(req.params.id));
};

module.exports.post = async (app, req, res) => {
  /** CRIAR VALIDATORS PARA OS INPUTS */
  /** CRIAR VALIDATORS PARA OS INPUTS */

  return res.send(
    await usuario.store({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
    })
  );
};

module.exports.put = async (app, req, res) => {
  /** VALIDAR INPUTS */
  return res.send(await usuario.update(req.body, req.params.id));
};

/** VALIDAR INPUTS */
module.exports.delete = async (app, req, res) => {
  return res.send(await usuario.destroy(req.params.id));
};
