var express = require("express");
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// grab all the models (also connect to mongodb)
var db = require("./models"); // {Bicycle: Bicycle}

/*********************************/
/* HTML ENDPOINTS -- for Hoomans */
/*********************************/

app.get("/", function(req, res){
  res.sendFile(__dirname + "/public/index.html");
});

/************************************/
/* JSON API ENDPOINTS -- for Robots */
/************************************/

// RESTful Routes & CRUD
// route = METHOD + PATH      callback = "controller action"
app.get("/api/bicycles", function bicycleIndex(req, res){
  db.Bicycle.find({}, function(err, allTheBikes){
    //TODO: error handling
    res.send({
      data: allTheBikes // all my bicycles
    });
  });
});

app.get("/api/bicycles/:_id", function bicycleShow(req, res){
  var _id = req.params._id;
  db.Bicycle.findOne({_id: _id}, function(err, theBike){
    //TODO: error handling
    res.send( theBike );
  });
});

app.delete("/api/bicycles/:_id", function bicycleDestroy(req, res){
  var _id = req.params._id;
  db.Bicycle.findOneAndRemove({_id: _id}, function(err){
    //TODO: error handling
    res.sendStatus(204);
  });
});

app.post("/api/bicycles", function bicycleCreate(req, res){
  var bike = req.body; // security concern to handoff without checking what it is

  db.Bicycle.create(bike, function(err, newBike){
    if(err){ console.log(err); }
    //TODO: error handling
    res.send(newBike);
  });
});

app.put("/api/bicycles/:_id", function bicycleUpdate(req, res){
  var _id = req.params._id;
  var bikeData = req.body; // security concern to handoff without checking what it is

  // http://mongoosejs.com/docs/api.html#model_Model.findOneAndUpdate
  db.Bicycle.findOneAndUpdate(
    {_id: _id}, bikeData, {new: true}, function(err, updatedBike){
      //TODO: error handling
      res.send(updatedBike);
    }
  );
});


/* run the server on port 3000! */

var port = 3000;
app.listen(port, function(){
  console.log("server running on http://localhost:" + port);
});
