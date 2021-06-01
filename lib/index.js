'use strict';

// Email address matcher.
var matcher = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

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
