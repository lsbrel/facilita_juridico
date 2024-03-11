const location = require("../models/location.js");
const { apiResponse } = require("../resources/response.js");

module.exports.index = async (app, req, res) => {
  try {
    /** BUSCA OS DADOS DE DADOS */
    const data = await location.all();
    /** BUSCA OS DADOS DE DADOS */

    /** CASO DADOS VOLTEM VAZIOS */
    if (data.length == 0) {
      return res.status(404).json(apiResponse(false, "dataNotFound"));
    }
    /** CASO DADOS VOLTEM VAZIOS */

    /** RETORNANDO DADOS EM CASO DE SUCESSO */
    return res.status(200).json(apiResponse(true, "dataRetrieveSuccess", data));
    /** RETORNANDO DADOS EM CASO DE SUCESSO */
  } catch (err) {
    return res.status(500).json(apiResponse(false, "dataRetriveFailed"));
  }
};

module.exports.show = async (app, req, res) => {
  try {
    /** BUSCA TODOS O DADO PELO ID */
    const data = await location.findById(req.params.id);
    /** BUSCA TODOS O DADO PELO ID */

    /** DADOS VAZIOS */
    if (data.length == 0) {
      return res.status(404).json(apiResponse(false, "dataNotFound"));
    }
    /** DADOS VAZIOS */

    /** RETORNANDO DADOS EM CASO DE SUCESSO */
    return res.status(200).json(apiResponse(true, "dataRetrieveSuccess", data));
    /** RETORNANDO DADOS EM CASO DE SUCESSO */
  } catch (err) {
    return res.status(500).json(apiResponse(false, "dataRetriveFailed"));
  }
};

module.exports.post = async (app, req, res) => {
  try {
    /** INSERINDO DADOS */
    const data = await location.store({
      coordinates: req.body.coordinates,
      user_id: req.body.user_id,
    });
    /** INSERINDO DADOS */

    /** RETORNANDO DADOS EM CASO DE SUCESSO */
    return res.status(200).json(apiResponse(true, "dataStoreSuccess", data));
    /** RETORNANDO DADOS EM CASO DE SUCESSO */
  } catch (err) {
    return res.status(500).json(apiResponse(false, "dataStoreFailed"));
  }
};

module.exports.put = async (app, req, res) => {
  try {
    /** INSERINDO DADOS */
    const data = await location.update(req.body, req.params.id);
    /** INSERINDO DADOS */

    /** RETORNANDO DADOS EM CASO DE SUCESSO */
    return res.status(200).json(apiResponse(true, "dataStoreSuccess", data));
    /** RETORNANDO DADOS EM CASO DE SUCESSO */
  } catch (err) {
    return res.status(500).json(apiResponse(false, "dataStoreFailed"));
  }
};

/** VALIDAR INPUTS */
module.exports.remove = async (app, req, res) => {
  try {
    /** DELETANDO DADOS */
    const data = await location.destroy(req.params.id);
    /** DELETANDO DADOS */

    /** RETORNANDO DADOS EM CASO DE SUCESSO */
    return res.status(200).json(apiResponse(true, "dataDeleteSuccess", data));
    /** RETORNANDO DADOS EM CASO DE SUCESSO */
  } catch (err) {
    return res.status(500).json(apiResponse(false, "dataDeleteFailed"));
  }
};
