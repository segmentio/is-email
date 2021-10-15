'use strict';

var isEmail = require('../lib');
var assert = require('proclaim');

describe('is-email', function() {
  it('should recognize valid email addresses', function() {
    assert.strictEqual(isEmail('team@segment.io'), true);
    assert.strictEqual(isEmail('team+@segmentio.com'), true);
    assert.strictEqual(isEmail('te-am@segmentio.com'), true);
    assert.strictEqual(isEmail('team@segmen-tio.com'), true);
    assert.strictEqual(isEmail('t-eam+34@segme-ntio.com'), true);
  });

  it('should recognize invalid email addresses', function() {
    assert.strictEqual(isEmail('team@.org'), false);
    assert.strictEqual(isEmail('team+45.io'), false);
    assert.strictEqual(isEmail('@segmentio.com'), false);
  });

  it('only accepts 320 characters', function() {
    // 11 characters
    var domain = '@segment.io';
    var local = '';
    var email = '';

    for (var i = 0; i < 310; i++) {
      local.concat('a');
    }

    email = local.concat(domain);

    assert.strictEqual(isEmail(email), false);
  });
});
