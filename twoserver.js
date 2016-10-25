var http = require("http");

// Lets define a port we want to listen to
var PORT1 = 7000;

// We need a function which handles requests and send response
function handleRequest1(request, response) {
 response.end("<b>Very Good</b>");
}

// Create a server
var server1 = http.createServer(handleRequest1);

// Lets start our server
server1.listen(PORT1, function() {

 // Callback triggered when server is successfully listening. Hurray!
 console.log("Server listening on: http://localhost:%s", PORT1);

});

//second port 
var PORT2 = 7500;


function handleRequest2(request, response) {
	response.end("<b> Very Bad </b>")
	// body...
}

var server2 = http.createServer(handleRequest2);

// Lets start our server
server2.listen(PORT2, function() {

 // Callback triggered when server is successfully listening. Hurray!
 console.log("Server listening on: http://localhost:%s", PORT2);

});