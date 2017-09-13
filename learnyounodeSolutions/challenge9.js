var http = require('http');
var bl   = require('bl');

var results = [];
var count = 0;
var totalRequest = 3;

function printResults () {
  for (var i = 0; i < results.length; i++)
    console.log(results[i]);
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (res) {
    
    res.pipe(bl(function (err, data) {
      if (err)
        return console.error(err);

      results[index] = data.toString();
      count++;

      if (count == totalRequest) 
        printResults();
        
    }));
  });
}

for (var i = 0; i < totalRequest; i++)
  httpGet(i);