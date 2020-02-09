var express = require('express');
var socket = require('socket.io');

// App setup
var app = express();
var server = app.listen(5000, ()=>{
    console.log('Server Listening on port 5000')
})

// static files
app.use(express.static('public'));

// socket setup
var io = socket(server);

io.on('connection', (socket) =>{
    console.log('made socket connection', socket.id);
    // Handle Chat Event
    socket.on('chat', data =>{
        io.sockets.emit('chat', data);
    });

    socket.on('typing', data =>{
        socket.broadcast.emit('typing', data)
    });

})
