/**
 * @author Andres Felipe Gonzalez
 * */
'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

let userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    name: {type: String, required: true},
    lastName: {type: String},
    email: {type: String, required: true, unique: true}
});

userSchema.pre('save', function(done){
    let user = this;
    if(!user.isModified('password')) return done();
    bcrypt.hash(user.password, 10).then(hash => {
       user.password = hash;
       done();
    }).catch(err => done(err));
});

userSchema.methods.validatePassword = function (password) {
    return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);