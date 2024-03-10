const { apiResponse } = require("../resources/response");
const { requestAttrs } = require("../models/user");

module.exports.paramsValidator = (req, res, next) => {
  if (isNaN(req.params.id)) {
    return res.status(200).json(apiResponse(false, "paramIdIsInvalid"));
  }

  next();
};

module.exports.bodyValidator = (req, res, next) => {
  Object.keys(req.body).map((x) => {
    if (!requestAttrs().includes(x)) {
      return res.status(200).json(apiResponse(false, "bodyParamsIsInvalid"));
    }
  });
  next();
};
