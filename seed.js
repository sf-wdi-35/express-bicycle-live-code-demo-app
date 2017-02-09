var db = require("./models/index.js")
var Bicycle = db.Bicycle;

var bike = {
  make: "Schwinn",
  model: "Colegiate",
  year: 1978
};

Bicycle.create(bike, function(err, newBike){
  if(err){ console.log(err); }
  console.log(newBike);
  process.exit();
});
