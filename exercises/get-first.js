'use strict'

/*
 * Create a `getFirst` function that takes an array or a string
 * and return the first element
 *
 * @notions Data-Structures, Get
 */

// Your code :
const array1 = [2, 42]
const array2 = ['pouet', 4, true]
const array3 = [getFirst]
const array4 = ['salut']
const array5 = []
function getFirst (array1, array2, array3, array4){
	return (array1[0]);
	return (array2[0]);
	return (array3[0]);
	return (array4[0]);
	return (array5[0]);
}


//* Begin of tests
const assert = require('assert')

assert.strictEqual(getFirst([ 2, 42 ]), 2)
assert.strictEqual(getFirst([ 'pouet', 4, true ]), 'pouet')
assert.strictEqual(getFirst([ getFirst ]), getFirst)
assert.strictEqual(getFirst('salut'), 's')
assert.strictEqual(getFirst([]), undefined)
// End of tests */
