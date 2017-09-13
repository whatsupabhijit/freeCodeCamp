var http = require('http');
var url = process.argv[2];

//http.get() return response which is like event emitter. It has 3 events data, error and end event.
http.get(url, function(res){
    var result ="";
    
    res.setEncoding('utf-8');
    //data event
    res.on("data", function(data){
        result += data;
    });
    
    //end event handling
    res.on("end", function(){
        console.log(result.length);
        console.log(result);
    });
});