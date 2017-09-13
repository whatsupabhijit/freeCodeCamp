var http = require('http')
  , map  = require('through2-map');

var convertedUpperCase = map(function(chunk){
  return chunk.toString().toUpperCase();
});

var server = http.createServer(function(req, res){
  if (req.method === 'POST')
    req.pipe(convertedUpperCase).pipe(res);
});
server.listen(process.argv[2]);