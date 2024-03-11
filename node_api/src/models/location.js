const Model = require("../resources/model.js");

class Location extends Model {
  /**
   * @description nome da tabela a ser usada como modelo
   */
  table = "tb_location";
  /**
   * @description nome dos atributos a serem inseridos e precisam ser passados nessa ordem
   */
  attrs = ["coordinates", "user_id"];

  constructor() {
    super();
  }
}

module.exports = new Location();
module.exports.requestAttrs = () => ["coordinates", "user_id"];
