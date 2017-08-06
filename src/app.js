/**
 * @author Andres Felipe Gonzalez
 * */

'use strict';

/* dependencies*/
const express = require('express');
const app = express();
const Router = express.Router();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const passport = require('./auth/passport.controller');
const {mongodb: {url, dbPort, dbName}} = require('./config/app');

/* Database connection */
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${url}:${dbPort}/${dbName}`, {useMongoClient: true}).then(() => {
    console.log('Database connection success!!');
}, err => {
    console.log(err);
});

/* App configuration */
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
passport.configureBasicStrategy();

require('./routes')(Router);
app.use('/api', Router);

module.exports = app;