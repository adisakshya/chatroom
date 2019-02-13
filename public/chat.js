$(function(){

	// make connection
	var socket = io.connect('http://localhost:3000');

	// inputs
	var message = $("#message")
	var username = $("#username")
	var send_message = $("#send_message")
	var send_username = $("#send_username")
	var chatroom = $("#chatroom")
	var feedback = $("#feedback")

	// emit message
	send_message.click(function(){
		socket.emit('chat message', {message : message.val()});
	});

	// listen on chat message
	socket.on('chat message', function(data){
		feedback.html('');
		message.val('');
		chatroom.append("<p class='message'>" + data.username + ": " + data.message + "</p>");
	});

	message.bind('keypress', () => {
		socket.emit('typing');
	});

	//Listen on typing
	socket.on('typing', () => {
		feedback.html("<p><i>" + " is typing a message..." + "</i></p>");
	});