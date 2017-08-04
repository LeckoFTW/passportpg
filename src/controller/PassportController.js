/**
 * @author Andres Felipe Gonzalez
 * */

'use strict';

const passport = require('passport');
const {BasicStrategy} = require('passport-http');
const User = require('../model/user.model');

module.exports = {
    configureBasicStrategy(){
        passport.use(new BasicStrategy((username, password, done)=>{
            User.findOne({username}).then(user => {
                if(!user) done(null, false);
                else user.verifyPassword(password).then(isMatch => {
                    if(isMatch) done(null, user);
                    else done(null, false);
                });
            }).catch(err => done(err));
        }));
    },

    isAuthenticated(method){
        return passport.authenticate(method, {session : false});
    }
};
