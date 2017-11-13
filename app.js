var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// var router = require('./routes')
// app.use('/', router)
var router = require('./routes')(app)

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function() {
	console.log('Connect to mongodb server');
})
mongoose.connect('mongodb://localhost/mongodb_tutorial');

var port = process.env.PORT || 8080;
var server = app.listen(port, function() {
	console.log("Express server has started on port " + port);
})