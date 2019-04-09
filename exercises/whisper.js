'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */
function whisper(bla){
	return bla.toLowerCase();
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof whisper, "function")
assert.strictEqual(whisper('HELLO'), 'hello')

// End of tests */
