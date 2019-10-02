'use strict';

const express = require('express');
const router = express.Router();

const User = require('../model/user/schema.js');
const auth = require('../midleware/auth.js');

router.post('/signup', (req, res, next) => {
    let user = new User(req.body);
    user.save(
        .then(user => {
            req.token = user.generateToken();
            req.user = user;
            res.set
        })
    )
})