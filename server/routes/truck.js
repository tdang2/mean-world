var express = require('express');
var truckRouter = express.Router();
var path = require('path');
var Truck = require('../models/truck.js');
var env = require(path.join(__dirname, '../env/azure'));

/* GET ALL TRUCKS */
truckRouter.get('/', function(req, res, next) {
  Truck.find(function (err, trucks) {
    if (err) return next(err);
    res.json(trucks);
  });
});

/* GET SINGLE TRUCK BY ID */
truckRouter.get('/:id', function(req, res, next) {
  Truck.findById(req.params.id, function (err, truck) {
    if (err) return next(err);    
    res.json(truck);
  });
});

/* SAVE TRUCK */
truckRouter.post('/', function(req, res, next) {
  Truck.create(req.body, function (err, truck) {
    if (err) return next(err);
    const data = {body: {data: truck, action: 'create'}};
    res.json(truck);
  });
});

/* UPDATE TRUCK */
truckRouter.put('/:id', function(req, res, next) {
  Truck.findByIdAndUpdate(req.params.id, req.body, function (err, truck) {
    if (err) return next(err);
    const data = {body: {data: truck, action: 'update'}};
    res.json(truck);
  });
});

/* DELETE TRUCK */
truckRouter.delete('/:id', function(req, res, next) {
  Truck.findByIdAndRemove(req.params.id, req.body, function (err, truck) {
    if (err) return next(err);
    const data = {body: {data: truck, action: 'remove'}};
    res.json(truck);
  });
});

module.exports = truckRouter;
