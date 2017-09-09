var fs = require('fs');
var filename = process.argv[2];
fs.readFile(filename, function(err, data){
    if (!err){
        var contents = data.toString();
        console.log(contents.split('\n').length - 1);
    }
});

