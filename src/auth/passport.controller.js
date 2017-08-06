/**
 * @author Andres Felipe Gonzalez
 * */

'use strict';

const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;
const User = require('../user/user.model');

module.exports = {
    configureBasicStrategy(){
        passport.use(new BasicStrategy((username, password, done)=>{
            User.findOne({username}).then(user => {
                if(!user) done(null, false);
                else user.validatePassword(password).then(isMatch => {
                    if(isMatch) done(null, user);
                    else done(null, false);
                });
            }).catch(err => done(err));
        }));
    },
    isBasicAuthenticated : passport.authenticate('basic', {session : false})
};
