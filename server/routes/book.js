var express = require('express');
var router = express.Router();
var path = require('path');
var mongoose = require('mongoose');
var Book = require('../models/book.js');
const { EventHubClient, EventData } = require("azure-event-hubs");
var env = require(path.join(__dirname, '../env/azure'));

const client = EventHubClient.createFromConnectionString(
  env.eventHubConnectionString, env.eventHubentityPath  
);

/* GET ALL BOOKS */
router.get('/', function(req, res, next) {
  Book.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE BOOK BY ID */
router.get('/:id', function(req, res, next) {
  Book.findById(req.params.id, function (err, post) {
    if (err) return next(err);    
    res.json(post);
  });
});

/* SAVE BOOK */
router.post('/', function(req, res, next) {
  Book.create(req.body, function (err, post) {
    if (err) return next(err);
    const data = {body: {data: post, action: 'create'}};
    client.send(data);
    res.json(post);
  });
});

/* UPDATE BOOK */
router.put('/:id', function(req, res, next) {
  Book.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE BOOK */
router.delete('/:id', function(req, res, next) {
  Book.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    const data = {body: {data: post, action: 'edit'}};
    client.send(data);
    res.json(post);
  });
});

module.exports = router;
