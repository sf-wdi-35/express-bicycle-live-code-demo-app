/* Mongo+Express+Node Setup Live Code*/

/**
 * > mkdir express-live-code
 * > cd express-live-code
 * > touch README.md .gitignore server.js
 * > git init
 * > touch package.json # add `{}`
 *
 * node
 * > require("express")
 *     Error: Cannot find module 'express'
 * > .exit
 * npm install --save express
 *
 * add to .gitignore:
 *      .DS_Store
 *      node_modules
 *
 */

///////////////
// server.js //
///////////////

var express = require("express");
var app = express();

var port = 3000;
app.listen(port, function(){
  console.log("server running on http://localhost:" + port)
});
