var isEmail = require('..');

suite('is-email');

test('catches emails', function () {
    isEmail('team@segment.io').should.be.true;
    isEmail('team+@segmentio.com').should.be.true;
    isEmail('te-am@segmentio.com').should.be.true;
    isEmail('team@segmen-tio.com').should.be.true;
    isEmail('t-eam+34@segme-ntio.com').should.be.true;
});

test('catches non emails', function () {
    isEmail('team@.org').should.be.false;
    isEmail('team+45.io').should.be.false;
    isEmail('@segmentio.com').should.be.false;
});