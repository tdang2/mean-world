var express = require('express');
var authRouter = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


authRouter.post('/login', function(req, res, next) {
    const {username, password} = req.body;
    let response = {status: 500};
    User.findOne(
        {'username': username}, 
        'username password firstName lastName', 
        function(err, user) {
            if (err) {
                response.status = 404
                response.error = err;
                res.status(response.status).send(resposne)
            }
            bcrypt.compare(password, user.password, function(e, r){
                if (e) {
                    response.result = e;
                    res.status(response.status).send(response);
                }
                if (r == true) {
                    const payload = {username: user.username};
                    const option = {expiresIn: '1h', issuer: process.env.JWT_ISSUER};
                    response.token = jwt.sign(payload, process.env.JWT_SECRET, option);
                    response.status = 200;
                    response.result = {'username': user.username, 'firstName': user.firstName, 'lastName': user.lastName};     
                } else {
                    response.status = 401;
                    response.error = 'Invalid username and password';
                }
                res.status(response.status).send(response);                                   
            });
        }
    );
});

  
module.exports = authRouter;
