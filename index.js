//require express
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.static(path.join(__dirname, 'public')));
//routes    
app.get('/', function(req, res) {
    res.send('Hello World');
}
);


//start server
var server = app.listen(3080, function() {
    console.log('Listening on port %d', server.address().port);
});

