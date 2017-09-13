var readDirectory = require('./challenge6.module');

var dirname = process.argv[2];
var ext     = process.argv[3];

readDirectory(dirname, ext, function(err, files){
    if (err){
        console.log(err);
        return err;
    }
    
    files.forEach(function(aFile){
        console.log(aFile);
    });
        
});