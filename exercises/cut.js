'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */
function cutFirst(bla){
	return bla.substring(2);
}
function cutLast(bla){
	return bla.substring(0, 3);
}
function cutFirstLast(bla){
	return bla.substring(3, 4);
}
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof cutFirst, "function")
assert.strictEqual(cutFirst('hello'), 'llo')
assert.strictEqual(typeof cutLast, "function")
assert.strictEqual(cutLast('hello'), 'hel')
assert.strictEqual(typeof cutFirstLast, "function")
assert.strictEqual(cutFirstLast('hello'), 'l')


// End of tests */
