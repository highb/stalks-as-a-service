'use strict';


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
    examples['application/json'] = [ {
  "minimumPrices" : [ 128, 120, 113, 105, 98, 90, 83, 135, 211, 302, 211, 135 ],
  "maximumOverall" : 906,
  "probability" : 20.0,
  "maximumPrices" : [ 136, 132, 127, 123, 118, 114, 109, 212, 302, 906, 302, 212 ],
  "pattern" : "LargeSpike",
  "minimumOverall" : 302,
  "sellPrice" : 151
}, {
  "minimumPrices" : [ 128, 120, 113, 105, 98, 90, 83, 135, 211, 302, 211, 135 ],
  "maximumOverall" : 906,
  "probability" : 20.0,
  "maximumPrices" : [ 136, 132, 127, 123, 118, 114, 109, 212, 302, 906, 302, 212 ],
  "pattern" : "LargeSpike",
  "minimumOverall" : 302,
  "sellPrice" : 151
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

