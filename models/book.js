var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bookSchema = new Schema({
	title: String,
	author: String,
	published_date: {
		type: Date,
		defualt: Date.now
	}
});

module.exports = mongoose.model('book', bookSchema);