const express = require('express');
const router = express.Router();
const db = require('../models')
const User = db.User;
const UserSession = db.UserSession

module.exports = function (app) {
    app.post('/api/account/signup', (req, res, next) => {
        const { body } = req;
        const {
            username,
            password
        } = body;
        let { email } = body

        if (!username) {
            return res.send({
                success: false,
                message: 'error: missing username'
            });
        }
        if (!password) {
            return res.send({
                success: false,
                message: 'error: missing password'
            });
        }a
        if (!email) {
            return res.send({
                success: false,
                message: 'error: missing email'
            });
        }
        email = email.toLowerCase();
        User.find({
            email: email
        }, (err, previousUser) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: server error'
                })
            } else if (previousUser.length > 0) {
                return res.send({
                    success: false,
                    message: 'Error: email in use'
                })
            }

            const newUser = new User();
            newUser.email = email;
            newUser.username = username;
            newUser.password = newUser.hashPassword(password);
            newUser.save((err, user) => {
                if (err) {
                    return res.send({
                        success: false,
                        message: 'Error: server error'
                    })
                }
                return res.send({
                    success: true,
                    message: 'Signed up'
                })

            })
        })


    })

    app.post('/api/account/signin', (req, res, next) => {
        const { body } = req;
        const {
            password
        } = body;
        let { email } = body

        if (!password) {
            return res.send({
                success: false,
                message: 'error: missing password'
            });
        }
        if (!email) {
            return res.send({
                success: false,
                message: 'error: missing email'
            });
        }

        email = email.toLowerCase();

        User.find({
            email: email
        }, (err, users) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'server error'
                })
            }
            if (users.length != 1) {
                return res.send({
                    success: false,
                    message: 'Error: invalid'
                })
            }

            const user = users[0];
            if (!user.comparePassword(password)) {
                return res.send({
                    success: false,
                    message: 'Error: invalid password'
                })
            }

            const UserSession = new UserSession();
            UserSession.userId = user._id;
            UserSession.save((err, doc) => {
                if (err) {
                    return res.send({
                        success: false,
                        message: 'Error: server error'
                    })
                }
                return res.send({
                    success: true,
                    message: 'valid sign in',
                    token: doc._id
                });
            });
        })
    });

    app.get('/api/account/verify', (req, res, next) => {
        const { query } = req;
        const { token } = query;

        UserSession.find({
            _id: token,
            isDeleted: false
        }, (err, sessions) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: Internal Server Error'
                });
            }

            if (sessions.length != -1) {
                return res.send({
                    success: false,
                    message: 'Error: Invalid'
                });
            } else {
                return res.send({
                    success: true,
                    message: 'good'
                });
            }
        })

    })

};