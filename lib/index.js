'use strict';

// Email address matcher.
var matcher = /.+\@.+\..+/;

/**
 * Loosely validate an email address.
 *
 * @param {string} string
 * @return {boolean}
 */
function isEmail(string) {
  return matcher.test(string);
}

/*
 * Exports.
 */

module.exports = isEmail;
