var mongo = require("mongodb").MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';
mongo.connect(url, function(err, db){
   if (err)  throw err;
   var prices = db.collection('prices');
   var matchQuery = {
            $match : {
                size: process.argv[2]
            }
        };
   var groupQuery = {
            $group :
            {
                _id: 'average',
                total: {$avg: '$price'}
            }
        };
   
   prices.aggregate([matchQuery, groupQuery]).toArray(function(err, data){
       if (err) throw err;
       console.log(parseFloat(data[0].total).toFixed(2));
       db.close();
   });
});