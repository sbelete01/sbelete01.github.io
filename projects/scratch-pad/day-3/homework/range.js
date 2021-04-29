// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    // I: two numbers O: array of numbers C: inclusive of input E: same number for ranges
    // create an global array variable 
    var rangeArr = [];
    // 3 cases start > end, start < end, start = end
    if(start < end){
        // for loop through paramters adding range to rangeArr
        // start: start stop: end
        for(var i = start; i <= end; i++){
            // push i into rangeArr
            rangeArr.push(i);
        } return rangeArr;
    } else if (start > end){
        // for loop loop backwards through paramters adding range to rangeArr
        // start: end stop: start
        for(var i = start; i >= end; i--){
            // push i into rangeArr
            rangeArr.push(i);
        } return rangeArr;
    }
    
    
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}
