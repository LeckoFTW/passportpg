/**
 * @author Andres Felipe Gonzalez
 * */

'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const passport = require('./src/controller/PassportController');

mongoose.createConnection('mongodb://localhost/passportpg', err =>{
    if(err) console.log(err);
    else console.log('Database connection success!!');
});


app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
passport.configureBasicStrategy();

app.listen(3000, err => {
    if(err) console.log(err);
    else console.log('server!!');
});


