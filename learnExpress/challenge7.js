var express = require("express");
var app = express();

app.get('/search', function(req, res){
   var returnJson = req.query;
   res.send(returnJson);
});

app.listen(process.argv[2]);