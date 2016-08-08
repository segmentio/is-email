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
    assert.strictEqual(isEmail(makeChars(64) + '@segmentio.com'), true); // max length for local-part
  });

  it('should recognize invalid email addresses', function() {
    assert.strictEqual(isEmail('team@.org'), false);
    assert.strictEqual(isEmail('team+45.io'), false);
    assert.strictEqual(isEmail('@segmentio.com'), false);
    assert.strictEqual(isEmail(true), false);
    assert.strictEqual(isEmail(42), false);
    assert.strictEqual(isEmail(makeChars), false);
    assert.strictEqual(isEmail(makeChars(65) + '@segmentio.com'), false); // max length for local-part (too long)
    assert.strictEqual(isEmail('team@' + makeChars(250) + '.com'), false); // max length for total (too long)
    assert.strictEqual(isEmail('.team@segmentio.com'), false); // leading `.` in local-part are not allowed
    assert.strictEqual(isEmail('team.@segmentio.com'), false); // trailing `.` in local-part are not allowed
    assert.strictEqual(isEmail('te..am@segmentio.com'), false); // 2 consecutive  `.`s in local-part are not allowed
    assert.strictEqual(isEmail('te am@segmentio.com'), false);
    assert.strictEqual(isEmail('te(am@segmentio.com'), false);
    assert.strictEqual(isEmail('te[am@segmentio.com'), false);
    assert.strictEqual(isEmail('te,am@segmentio.com'), false);
    assert.strictEqual(isEmail('te:am@segmentio.com'), false);
    assert.strictEqual(isEmail('te;am@segmentio.com'), false);
    assert.strictEqual(isEmail('te<am@segmentio.com'), false);
    assert.strictEqual(isEmail('te@am@segmentio.com'), false);
    assert.strictEqual(isEmail('te."am"@segmentio.com'), false);
    assert.strictEqual(isEmail('te"am"@segmentio.com'), false);
    assert.strictEqual(isEmail('te"am"@segment$io.com'), false);
  });
});

function makeChars(nb) {
  var str = '';
  while (nb > 0) {
    str += 'a';
    nb -= 1;
  }
  return str;
}
