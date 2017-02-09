var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/express-demo-bicycle-app");

var Bicycle = require("./bicycle.js");
module.exports = {
  Bicycle: Bicycle
};
