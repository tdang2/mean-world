var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var mongoose = require('mongoose');
require('dotenv').config({path: path.join(__dirname, '.env')});

var apiRouter = require(path.join(__dirname, 'routes/book'));

var app = express();

if (app.get('env') == 'development_azure') {
  var mongod_env = require(path.join(__dirname, 'env/azure'));
} else {
  var mongod_env = require(path.join(__dirname, 'env/local'));
}
mongoose.connect(mongod_env.mongodb_url, mongod_env.mongo_options)
  .then(() =>  console.log('connection successful'))
  .catch((err) => console.error(err));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../dist/mean-world')));
app.use('/', express.static(path.join(__dirname, '../dist/mean-world')));
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.sendStatus(err.status || 500);
  res.sendStatus(err.status);
});

module.exports = app;
