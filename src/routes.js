/**
 * @author Andres Felipe Gonzalez
 * */

"use strict";
const UserController = require('./user/user.controller');
const PassportController = require('./auth/passport.controller');
const AuthController = require('./auth/auth.controller');


module.exports = router => {

    router.route('/auth')
        .get(PassportController.isBasicAuthenticated, AuthController.authenticate);

    router.route('/user')
        .post(UserController.createUser)
        .get(UserController.findAllUsers);

    router.route('/')
        .get(PassportController.isBasicAuthenticated,(req, res) => res.json({message  : 'ok'}));
};