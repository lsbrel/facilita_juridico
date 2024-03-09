module.exports.index = (app, req, res) => {
  return res.send("GET");
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
  return res.send("DELETE" + req.params.id);
};
