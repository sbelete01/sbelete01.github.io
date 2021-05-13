/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search (animals,name){
    // loop through arrayOfAnimals
    for (let i = 0; i < animals.length; i++){
        // check if anyi animal's object index matches name
        if(animals[i].name === name){
            // return animal object if match found
            return animals[i];
        } 
    }
    return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace (animals, name, replacement){
    // loop through array animals
    for (let i = 0; i < animals.length; i++){
        // check if any index on animal's object matches name string
        if(animals[i].name === name){
            // replace og animal object with replacement paramater object
            animals[i] = replacement;
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name){
    // loop through animals array
    for (let i = 0; i < animals.length; i++){
      //  check if any index on animal's obj matches name string
      if(animals[i].name === name){
          // remove animal's obj
          animals.splice(i,1);
      }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal){
    // check if animal has name & species properties
    if(animal.name.length > 0 && animal.species.length > 0){
        // check if animal name is unique for animals array
        // loop through animals array to access animal's names
        for (let i = 0; i < animals.length; i++){
            // check if any index on animals array matches animal name
            if(animals[i].name === animal.name){
                return "error";
            }
        } animals.push(animal);
    }
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
