'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.stalkPrediction = function stalkPrediction (req, res, next, firstTimeBuyer, previousPattern, sellPrice, buyPrice) {
  Default.stalkPrediction(firstTimeBuyer, previousPattern, sellPrice, buyPrice)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
