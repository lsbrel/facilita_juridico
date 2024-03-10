const Model = require("../resources/model");

class User extends Model {
  /**
   * @description nome da tabela a ser usada como modelo
   */
  table = "tb_user";
  /**
   * @description nome dos atributos a serem inseridos e precisam ser passados nessa ordem
   */
  attrs = ["name", "email", "phone"];

  constructor() {
    super();
  }
}

module.exports = new User();
