'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

function yell(bla){
	return bla.toUpperCase();
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof yell, "function")
assert.strictEqual(yell('hello'), 'HELLO')


// End of tests */
