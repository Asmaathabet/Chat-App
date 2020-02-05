var express = require('express');

var app = express();

var server = app.listen(5000, ()=>{
    console.log('Server Listening on port 5000')
})

// static file 
app.use(express.static('public'));
