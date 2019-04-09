'use strict'

/*
 * Create a `getLast` function that takes an array or a string
 * and return the last element.
 *
 * @notions Data-Structures, Get
 */

// Your code :
const  array1=[2, 42];
const  array2=['pouet', 4, true];
const  array3=[getLast];
const  array4=['salut'];
const  array5=[];

function getLast(array1, array2, array3, array4, array5){
	return (array1[array1.length-1]);
	return (array2[array2.length-1]);
	return (array3[array3.length-1]);
	return (array4[array4.length-1]);
	return (array5[array5.length-1]);
}


//* Begin of tests
const assert = require('assert')

assert.strictEqual(getLast([ 2, 42 ]), 42)
assert.strictEqual(getLast([ 'pouet', 4, true ]), true)
assert.strictEqual(getLast([ getLast ]), getLast)
assert.strictEqual(getLast('salut'), 't')
assert.strictEqual(getLast([]), undefined)
// End of tests */
