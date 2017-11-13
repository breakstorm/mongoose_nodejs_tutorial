var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// When router module doesn't use a express.router() module
// var router = require('./routes')
// app.use('/', router)
var router = require('./routes')(app)

// this connection logic is deprecated as of 4.11.0
// var db = mongoose.connection;
// db.on('error', console.error);
// db.once('open', function() {
// 	console.log('Connect to mongodb server');
// })
// mongoose.connect('mongodb://localhost/mongodb_tutorial');

// This is a new way to connect mongoose
var options = {
  useMongoClient: true,
  autoIndex: false, // Don't build indexes
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0
};
var connected = mongoose.connect('mongodb://localhost/mongodb_tutorial',options,function(err) {
	console.error
})
connected.then(function() {
	console.log('Connect to mongodb server');
})

var port = process.env.PORT || 8080;
var server = app.listen(port, function() {
	console.log("Express server has started on port " + port);
})