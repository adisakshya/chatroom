// setup the application

var app = require('express')();			// function handler used to supply an HTTP server
var http = require('http').Server(app); // HTTP server
var io = require('socket.io')(http);

// routes
app.get('/', function(req, res){
	res.sendFile(__dirname + '/views/index.html');
});

// listen on port 3000
http.listen(3000, function(){
	console.log('listening on*:3000');
});

io.on('connection', function(socket){
	console.log('New User Connected');

	// default username
	socket.username = "Anonymous";

	// listen on new message
	socket.on('chat message', function(message){
		// broadcast new message
		io.emit('chat message', message);
	});

	// listen on typing
	socket.on('typing', function(data){
		socket.broadcast.emit('typing');
	});

});