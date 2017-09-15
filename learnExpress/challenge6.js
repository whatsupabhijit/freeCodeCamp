var express = require("express");
var crypto  = require("crypto");

var app = express();

app.put('/message/:id', function(req, res){
    var id = req.params.id;
    res.send(crypto.createHash('sha1').update(new Date().toDateString() + id).digest('hex')) ;
});

app.listen(process.argv[2]);