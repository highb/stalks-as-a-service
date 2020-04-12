'use strict';

var prediction = require('../utils/prediction.js');

/**
 * Stalk Market Prediction
 * By passing in the appropriate options, you can get all predictions for your islands Stalk Market 
 *
 * firstTimeBuyer Boolean Is this your first time buying turnips from Daisy Mae on your island? (optional)
 * previousPattern String What was last week's turnip price pattern (optional)
 * sellPrice Integer How much Turnips are selling for this week (optional)
 * buyPrice List The daily prices that the Nooks are willing to pay in order from Monday AM/PM to Saturday AM/PM prices. (optional)
 * returns List
 **/
exports.stalkPrediction = function(firstTimeBuyer,previousPattern,sellPrice,buyPrice) {
  return new Promise(function(resolve, reject) {
    var examples = {};

    generated_possibilities = prediction.analyze_possibilities(buyPrice, firstTimeBuyer, previousPattern)

    examples['application/json'] = generated_possibilities;
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

