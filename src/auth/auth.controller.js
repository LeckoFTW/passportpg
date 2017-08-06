/**
 * @author Andres Felipe Gonzalez
 */

'use strict';

const User = require('path');

module.exports = {
    authenticate(req, res){
        res.json({user : req.user});
    }
};
