/**
 * @autor Andres Felipe Gonzalez
 * */

'use strict';

/* Require dependencies*/
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.should();
chai.use(chaiHttp);

describe('User CRUD', () => {
    let app;

    before(done => {
        app = require('../src/app');
        done();
    });

    it('read all users', done => {
        chai.request(app)
            .get('/api/user')
            .end((err, res) => {
                res.body.should.be.an('array');
                done();
            });
    });
});
