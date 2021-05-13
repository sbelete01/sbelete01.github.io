/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {};
animal.species = "Lion";
animal['name'] = "Alex";
animal.noises = [];
console.log(animal);



//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = [];
noises.push("ROAR");
noises.push("meow");
noises.unshift("growl");
noises[noises.length] = "hissss";
console.log(noises.length);
console.log(noises.length-1);
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal['noises'] = noises;
animal.noises.push("grr");

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *   dot notaiton, bracket notation
 * 2. What are the different ways of accessing elements on arrays?
 *  bracket notation
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
    var animals = [];
    animals.push(animal);
    console.log(animals);
    var duck = { 
        species: 'duck', 
        name: 'Jerome',
        noises: ['quack', 'honk', 'sneeze', 'woosh'] };
    animals.push(duck);
    console.log(animals);
    var bee = { 
        species: 'bee', 
        name: 'Buzz',
        noises: ['bzz', 'zzz', 'whoosh', 'bbb'] };
    animals.push(bee);
    var dog = { 
        species: 'dog', 
        name: 'Doug',
        noises: ['ruff', 'bark', 'sneeze', 'grrr'] };
    animals.push(dog);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// We chose array because storing similar datatypes 
var friends = [];
// I: animals array O: 1 number
function getRandom(animals) {
  return Math.floor(Math.random() * (animals.length));
}
 // [ ] Using a random index from this function that you just created, get a random animal and add its `name` to `friends`.
friends.push(animals[getRandom(animals)].name);
console.log(friends);
animals[0].friends = friends;

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}