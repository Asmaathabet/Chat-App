// make connection with client side 
var socket = io.connect('http://localhost:5000');

// Dom
var message = document.getElementById('message'),
    sender = document.getElementById('sender'),
    send = document.getElementById('send'),
    output = document.getElementById('output');