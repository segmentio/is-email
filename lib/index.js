'use strict';

// Email address matcher.
var matcher = /^([^.](?![a-zA-Z0-9!#$%&'*+\-/=?^_`{|}~]+\.\.)([a-zA-Z0-9!#$%&'*+\-/=?^_`{|}~.]+[^.])|([a-zA-Z0-9]{1,2}))@([A-Za-z0-9-]{1,64}\.){1,10}[a-zA-Z]{2,64}$/;

/**
 * Loosely validate an email address.
 *
 * @param {string} string - The string to check
 * @return {boolean}
 */
function isEmail(string) {
  return typeof string === 'string' && (
    matcher.test(string) && string.indexOf('@') < 65 && string.length < 255
  );
}

/*
 * Exports.
 */

module.exports = exports = isEmail;
