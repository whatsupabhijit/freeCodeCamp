
var mongo = require("mongodb").MongoClient;

var url = 'mongodb://localhost:27017/learnyoumongo';
mongo.connect(url, function(err, db){
    //db gives access to database
    
    var inputage = process.argv[2];
    if(!err){
        var parrot = db.collection('parrots');
        parrot.find({age:  {$gt: +inputage}}, {name: 1, age: 1, _id: 0}).toArray(function(err, docs){
            if (err) throw err;
            console.log(docs);
            db.close();
        });
    }
});
