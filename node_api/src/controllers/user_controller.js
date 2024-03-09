// const Model = require("../resources/model");
const { getClient } = require("../resources/db_connector");
// const user = new Model();

module.exports.index = async (app, req, res) => {
  let cli = await getClient();
  let data = await cli.query("SELECT * FROM tb_user");
  return res.send(data.rows);
};

module.exports.show = (app, req, res) => {
  return res.send("SHOW" + req.params.id);
};

module.exports.post = (app, req, res) => {
  return res.send("POST");
};

module.exports.put = (app, req, res) => {
  return res.send("PUT" + req.params.id);
};

module.exports.delete = (app, req, res) => {
  return res.send("DELETE", +req.params.id);
};
