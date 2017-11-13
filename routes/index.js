// var express = require('express');
// var router = express.Router()

module.exports = function(app){
	app.get('/api/books', function(req, res) {
		var book = new Book();
		book.title = req.body.name;
		book.author = req.body.author;
		book.published_date = new Date(req.body.published_date);

		book.save(function(err) {
			if(err) {
				console.err(err);
				res.json({result:0});
				return;
			}
			res.json({result:1});
		})
	})
	app.get('/api/books/:book_id', function(req, res) {
		res.end();
	})
	app.get('/api/books/author/:author', function(req, res) {
		res.end();
	})
	app.post('/api/books', function(req, res) {
		res.end();
	})
	app.put('/api/books/:book_id', function(req, res) {
		res.end();
	})
	app.delete('/api/books/:book_id', function(req, res) {
		res.end();
	})
}