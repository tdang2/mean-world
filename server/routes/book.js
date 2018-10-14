var express = require('express');
var bookRouter = express.Router();
var path = require('path');
var mongoose = require('mongoose');
var Book = require('../models/book.js');
var env = require(path.join(__dirname, '../env/azure'));

/* GET ALL BOOKS */
bookRouter.get('/', function(req, res, next) {
  Book.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE BOOK BY ID */
bookRouter.get('/:id', function(req, res, next) {
  Book.findById(req.params.id, function (err, book) {
    if (err) return next(err);    
    res.json(book);
  });
});

/* SAVE BOOK */
bookRouter.post('/', function(req, res, next) {
  Book.create(req.body, function (err, book) {
    if (err) return next(err);
    const data = {body: {data: book, action: 'create'}};
    res.json(book);
  });
});

/* UPDATE BOOK */
bookRouter.put('/:id', function(req, res, next) {
  Book.findByIdAndUpdate(req.params.id, req.body, function (err, book) {
    if (err) return next(err);
    res.json(book);
  });
});

/* DELETE BOOK */
bookRouter.delete('/:id', function(req, res, next) {
  Book.findByIdAndRemove(req.params.id, req.body, function (err, book) {
    if (err) return next(err);
    const data = {body: {data: book, action: 'edit'}};
    res.json(book);
  });
});

module.exports = bookRouter;
