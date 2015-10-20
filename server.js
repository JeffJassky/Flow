// Require Stuff
var express = require('express');
var bodyParser = require('body-parser');

// Set up app
var app = express();
var port = process.env.PORT || 5000;

// Static Content
app.use(express.static(__dirname + '/public'));

app.listen(port);
console.log('Express app started on port ' + port);