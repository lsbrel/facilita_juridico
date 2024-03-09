const express = require("express");
const consign = require("consign");

const app = express();

consign()
  .include("src/routes")
  .then("src/models")
  .then("src/controllers")
  .into(app);

/** ROTAS NAO ENCONTRADAS */
app.all("*", (req, res) => {
  res.send("notFound");
});
/** ROTAS NAO ENCONTRADAS */

app.listen(3010, () => {
  console.log(`App is running`);
});
