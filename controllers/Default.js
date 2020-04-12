'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.stalkPrediction = function stalkPrediction (req, res, next) {
  var firstTimeBuyer = req.swagger.params['firstTimeBuyer'].value;
  var previousPattern = req.swagger.params['previousPattern'].value;
  var sellPrice = req.swagger.params['sellPrice'].value;
  var buyPrice = req.swagger.params['buyPrice'].value;
  Default.stalkPrediction(firstTimeBuyer,previousPattern,sellPrice,buyPrice)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
