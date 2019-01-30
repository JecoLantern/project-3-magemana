const express = require('express');
const router = express.Router();
const db = require('../models')
const User = db.User;

module.exports = function (passport) {
    router.post('/signup', function (req, res) {
        const body = req.body,
            username = body.username,
            password = body.password;
        User.findOne({ username: username }, function (err, doc) {
            if (err) res.status(500).send('error occured')
            else {
                if (doc) res.status(500).send('Username already in use, try another');
                else {
                    const record = new User()
                    record.username = username;
                    record.password = record.hashPassword(password);
                    record.save((err, user) => {
                        if (err) res.status(500).send('db error occured')
                        else {
                            res.send(user)
                        }
                    })
                }
            }
        })
    })

    router.post('/login', passport.authenticate('local', {
        failureRedirect: './login',
        successRedirect: './select'
    }), function (req, res) {
        res.send('')
    })

    return router;
};