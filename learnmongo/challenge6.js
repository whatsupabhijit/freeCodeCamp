var mongo = require("mongodb").MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function(err, db){
   if (err) throw err;
   var collection = db.collection('users');
   var query = {username: 'tinatime'};
   var setFields = {$set: {age: 40} };
   
   collection.update(query, setFields, function(err, data){
       if (err) throw err;
       console.log(data);
       db.close();
   })
});