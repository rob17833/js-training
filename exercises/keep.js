'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */
function keepFirst(bla){
	return bla.slice(0,2); 
}
function keepLast(bla){
	return bla.slice(3,5);
}
function keepFirstLast(bla){
	return bla.slice(3);
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof keepFirst, "function")
assert.strictEqual(keepFirst('hello!'), 'he')
assert.strictEqual(typeof keepLast, "function")
assert.strictEqual(keepLast('hello!'), 'lo')
assert.strictEqual(typeof keepFirstLast, "function")
assert.strictEqual(keepFirstLast('hello!'), 'lo!')

// End of tests */
