/**
 * @author Andres Felipe Gonzalez
 * */

'use strict';

/* Require dependencies */
const app = require('./src/app');
const {port} = require('./src/config/app');

app.listen(port, err => {
    if(err) console.log(err);
    else console.log(`Server started on port ${port}`);
});

module.exports = app;