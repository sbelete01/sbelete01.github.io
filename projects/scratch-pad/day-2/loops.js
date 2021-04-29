// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  //I: array
  //O: no return
  //C: use console.log
for(var i = 0; i <= array.length; i++){
  console.log(array[i]);
}
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  //I: array
  //O: none
  //C: use console.log
  // use for loop to loop through array
  // starting with arrays last value print each statement
  for(var i = array.length-1; i >= 0; i--){
    console.log(array[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // I: object O: array of object keys
  // declare global array for use inside for in loop
  // for in loop through object keys and push into array
  var arrayContainingObjKeys = [];
  for (var key in object){
    arrayContainingObjKeys.push(key);
  }
  // return global array to return object keys for the function
  return arrayContainingObjKeys;
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // I: object O: n/a C: use console.log
  // use for in loop to access object keys
  for (var key in object){
    // console.log each key as object is looped over
    console.log(key);
  }
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // I: object O: array of values
  // initialize global variable array literal for use inside for in loop
  var arrayObjVal = [];
  // for in loop through to access each object value
  for (var key in object){
    //push values into array
    arrayObjVal.push(object[key])
  }
  /// return array 
  return arrayObjVal;
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // I: object O:none C: console.log object values
  // use for in loop to access object values
  for (var key in object){
    // print each value as object is looped through
    console.log(object[key]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  // initialize array literal to hold object keys
  var arrayObjKeys = [];
  // for in loop through object
  for(var key in object){
    //push keys into array
    arrayObjKeys.push(key);
  }
  // return length properties to count number of key/value pairs in obj
  return arrayObjKeys.length;
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  // I: object O: n/a C: console.log obj values in reverse
  // initialize array literal to hold object keys
  var arrayObjKeys = [];
  // for in loop through object
  for(var key in object){
    //push keys into array
    arrayObjKeys.push(key);
  }
  // for loop in reverse order through object
  // start: arrayObjKey.length-1
  // stop: 0
  for (var i = arrayObjKeys.length-1; i >= 0; i--){
    // console.log object values using bracket notation
    console.log(object[arrayObjKeys[i]]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
