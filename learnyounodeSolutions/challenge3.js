var fs = require('fs');

var filename = process.argv[2];

var fileBuffer = fs.readFileSync(filename);

var contents = fileBuffer.toString();

console.log(contents.split('\n').length - 1);
