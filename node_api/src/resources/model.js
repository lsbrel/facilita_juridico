const { getClient } = require("./db_connector");

class Model {
  constructor() {
    this.connect();
  }

  async connect() {
    this.client = await getClient();
  }
}
