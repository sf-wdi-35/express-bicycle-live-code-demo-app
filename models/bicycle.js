var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var BicycleSchema = new Schema({
  make: String,
  model: String,
  year: Number
});

var Bicycle = mongoose.model('Bicycle', BicycleSchema);

module.exports = Bicycle;
