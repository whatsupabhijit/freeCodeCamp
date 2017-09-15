var express = require("express");
var jade = require("jade");
var path = require("path");
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.get('/home', function(req, res){
    var date = new Date();
    res.render("challenge3", {date: date.toDateString()});
});

app.listen(process.argv[2], function(){
    
});
