const express = require("express");
const consign = require("consign");
const cors = require("cors");

const app = express();

/** SUPORTE A JSON */
app.use(express.json());
/** SUPORTE A JSON */

/** SUPORTE CORS */
app.use(cors());
/** SUPORTE CORS */

// consign({ cwd: "node_api/src" })
consign()
  .include("src/routes")
  .then("src/models")
  .then("src/controllers")
  .into(app);

/** ROTAS NAO ENCONTRADAS */
app.all("*", async (req, res) => {
  res.send("rota nao existe");
});
/** ROTAS NAO ENCONTRADAS */

app.listen(3010, () => {
  console.log(`App is running`);
});
