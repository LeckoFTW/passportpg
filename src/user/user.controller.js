/**
 * @author Andres Felipe Gonzalez
 * */
'use strict';

const User = require('./user.model');



module.exports = {
    createUser(req, res){
        let user = new User(req.body);
        user.save().then(user=> {
            res.json(user);
        }).catch(err => {
            res.status(500).json(err)
        });
    },
    findAllUsers(req, res){
        User.find({}).then(function (user) {
            res.json(user);
        });
    }
};