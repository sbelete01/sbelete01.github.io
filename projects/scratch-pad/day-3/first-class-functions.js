// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // separate function into string and number responses
    // I: base number O: function
    // C: out function should test whether given number is greater than base E: input can be string or number
    if (typeof base === 'number'){
        // return function
        return function(givenNum){
            // test whehter given num greater than base
            return givenNum > base;
        };
    } else if (typeof base == 'string'){
        // return function
        return function(givenStr){
            // test whehter given string greater than base
            return givenStr > base;
        };
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // separate function into string and number responses
    // I: base number O: function
    // C: output function should test whether given number is less than base E: input can be string or number
    if(typeof base == 'string'){
        // return function
        return function (givenStr){
            // test whether given str less than base
            return givenStr < base;
        };
    } else if (typeof base === 'number'){
        // return function
        return function (givenNum){
            // test whehter given num less than base
            return givenNum < base;
        };
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    // I: single char O: function C: test whether given string starts with input Char
    // return function
    return function(givenStr){
        // test whehter given string starts with starts with char
        // force both given and base to upper case to check if same letter not if same letter and same capitalization
        return startsWith.toUpperCase() === givenStr[0].toUpperCase();
    }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    // I: single char O: function C: test given str last char with given char
    // return function
    return function (givenStr){
        // return test of given last char with given char
        // force upper case to just check if same last char
        // use length property to accesss last char of given string
        return endsWith.toUpperCase() === givenStr[givenStr.length-1].toUpperCase();
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    // I: array of strings & modifying function
    // O: array of strings modified
    
    // create global array to hold modified strings
    var arrayModStr = [];
    
    // loop over array of strings
    // start: 0 stop: strings[strings.length-1]
    for (var i = 0; i < strings.length; i++){
        // push modified strings into array
        arrayModStr.push(modify(strings[i]));
    }
    // return array of modified strings
    return arrayModStr;
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    // I: array of strings & function to test strings
    // O: boolean 
    // C: test array of strings with function
    // loop through array of strings
    // start: 0 stop: strings[strings.length-1]
    for (var i = 0; i < strings.length; i++){
        // pass strings through test
        // if one test fails return false
        if(test(strings[i]) === false){
            return false;
        } 
    } return true;
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
