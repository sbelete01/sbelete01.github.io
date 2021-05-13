// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    // return contact object with parameters as keys and arguments as values
    return {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast,
    };
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];

    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        // takes a contact object to be added to the contact-list
        addContact: function(contact) {
            // add new contact to contacts array
            contacts.push(contact);
        },
        // findContact(fullName)
        // takes a full-name String, like 'Max Gaudin', and
        // returns the contact object if found in the contacts-list, or,
        // undefined if the fullName does not match any contacts in the list
        findContact: function(fullName) {
            // loop through contacts array
            for (var i = 0; i < contacts.length; i++){
                // check if fullName matches any contact
                if (fullName === `${contacts[i].nameFirst} ${contacts[i].nameLast}`){
                    // return contact object if found
                    return contacts[i];
                }
                // return undefined if no match
                return undefined;
            } 
        },
        // removeContact(contact): takes a contact object to be removed from
        // the contact-list.
        removeContact: function(contact){
             // loop through contacts array
            for (var i = 0; i < contacts.length; i++){
                // check if contact matches any fullname from contact
                if (contact.nameFirst === contacts[i].nameFirst){
                    // delete contact object if found
                    contacts.splice(i,1);
                }
            } 
        },
        // add a printAllContactNames() Function to your makeContactList() factory.
        // return a String formated with all the full-names of the separated 
        // by line breaks
        // declare names array to hold full names of contacts
        printAllContactNames: function(){
            let names = [];
            // loop through contacts array to add to names array
            for (let i = 0; i < contacts.length; i++){
                // add contacts full names to names array
                names.push(`${contacts[i].nameFirst} ${contacts[i].nameLast}`);
            } return names.join('\n');
        }
    };
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
