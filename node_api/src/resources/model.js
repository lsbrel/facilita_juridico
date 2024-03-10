const { __formatNumValues } = require("../models/user");
const { getClient } = require("./db_connector");

class Model {
  constructor() {
    this.connect();
  }

  async connect() {
    this.client = await getClient();
  }

  async all() {
    const query = await this.client.query(`SELECT * FROM ${this.table}`);
    return query.rows;
  }

  async findById(id) {
    const query = await this.client.query(
      `SELECT * FROM ${this.table} WHERE id = ${id}`
    );
    return query.rows;
  }

  async store(data) {
    const query = await this.client.query(
      `INSERT INTO ${
        this.table
      }(${this.__formatAttrs()}, created_at, updated_at) VALUES(${this.__formatNumValues()})`,
      this.__insertValues(data)
    );

    return query;
  }

  async update(data, id) {
    const updateData = this.__updateValues(data);
    const query = await this.client.query(
      `UPDATE ${this.table} SET ${updateData.update} WHERE id = ${id}`,
      updateData.values
    );

    return query.rows;
  }

  async destroy(id) {
    const query = await this.client.query(
      `DELETE FROM ${this.table} WHERE id = ${id}`
    );
    return query.rows;
  }

  /** METODOS DE APOIO */
  __formatAttrs() {
    return this.attrs.join(", ");
  }
  __formatNumValues() {
    const arr = this.attrs.map((x, index) => `$${index + 1}`);
    arr.push(`$${arr.length + 1}`, `$${arr.length + 2}`);
    return arr.join(",");
  }
  __insertValues(data) {
    const today = new Date();
    let retValue = Object.values(data);
    retValue.push(today, today);
    return retValue;
  }
  __updateValues(data) {
    let values = [];
    let arr = Object.keys(data).map((x, index) => {
      values.push(data[x]);
      return `${x} = $${index + 1}`;
    });
    arr.push(`updated_at = $${arr.length + 1}`);
    values.push(new Date());
    return {
      update: arr.join(","),
      values: values,
    };
  }
  /** METODOS DE APOIO */
}

module.exports = Model;
