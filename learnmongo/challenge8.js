var mongo = require("mongodb");

var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function(err, db){
   if (err)  throw err;
   var collection = db.collection('parrots');
   var query  = {age: {$gt: +process.argv[2]}};
   collection.count(query, function(err, count){
       if (err) throw err;
       console.log(count);
       db.close();
   });
});