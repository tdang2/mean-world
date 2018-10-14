var express = require('express');
var userRouter = express.Router();
var path = require('path');
var mongoose = require('mongoose');
var User = require('../models/user.js');

/* GET ALL USERS */
userRouter.get('/', function(req, res, next) {
  User.find(function (err, users) {
    if (err) return next(err);
    res.json(users);
  });
});

/* GET SINGLE USER BY ID */
userRouter.get('/:id', function(req, res, next) {
  User.findById(req.params.id, function (err, user) {
    if (err) return next(err);    
    res.json(user);
  });
});

/* SAVE USER */
userRouter.post('/', function(req, res, next) {
  User.create(req.body, function (err, user) {
    if (err) return next(err);
    res.json(user);
  });
});

/* UPDATE USER */
userRouter.put('/:id', function(req, res, next) {
  User.findByIdAndUpdate(req.params.id, req.body, function (err, user) {
    if (err) return next(err);
    res.json(user);
  });
});

/* DELETE USER */
userRouter.delete('/:id', function(req, res, next) {
  User.findByIdAndRemove(req.params.id, req.body, function (err, user) {
    if (err) return next(err);
    res.json(user);
  });
});

module.exports = userRouter;
