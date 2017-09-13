var fs = require('fs');
// var path = require('path');

module.exports = function(dirname, ext, cb){

  var pat = RegExp('\\.' + ext + '$');
  
  fs.readdir(dirname, function(err, files){
    if (err){
        
      cb(err, null);
      
    }else{
      var fileNames = [];
      
      files.forEach(function(aFile){
        if (pat.test(aFile))
          fileNames.push(aFile);
      });
      
      cb(null, fileNames);
    }
  });
 
};