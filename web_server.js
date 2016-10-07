/* basic server layout, thanks Node tutorial */
var http = require("http");
var server = http.createServer(function(request, response) {
  var headers = request.headers;
  var method = request.method;
  var url = request.url;
  
});

server.listen(80);
console.log("Server is listening");
