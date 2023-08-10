//require express
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');
const { serialize } = require('v8');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
//routes    
app.get('/', function(req, res) {
    res.send('Welcome to orgboat.me!');
}
);

//start server
var server = app.listen(3080, function() {
    console.log('Listening on port %d', server.address().port);
});

