// make connection with client side 
var socket = io.connect('http://localhost:5000');

// Dom
var message = document.getElementById('message'),
    sender = document.getElementById('sender'),
    send = document.getElementById('send'),
    output = document.getElementById('output'),
    feedback = document.getElementById('feedback');

// emit events 

send.addEventListener('click', ()=>{
    socket.emit('chat', {
      message : message.value ,
      sender: sender.value
    })
}); 

message.addEventListener('keypress', ()=>{
    socket.emit('typing', sender.value);
})

// Listen for events
socket.on('chat', data =>{
    output.innerHTML += '<p><strong>'+ data.sender+ ':</strong>'+ data.message + '</p>';
})

socket.on('typing', data =>{
    feedback.innerHTML += '<p><em>'+ data+ 'is typing a message ... </em></p>';
})