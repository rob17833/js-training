'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
let bla = 'je doutais de moi'
function jadenCase(bla){
    let array = bla.split(" ");
    for (let i=0 ; i<=array.length-1 ; i++){
        array[i]=array[i].charAt(0).toUpperCase() + array[i].slice(1);
        
    }
    return array.join(' ');
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, "function")
assert.strictEqual(jadenCase('je doutais de moi'), 'Je Doutais De Moi')

// End of tests */
