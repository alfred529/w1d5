// An array of objects (an array of family members that stores values within each object)

var data = []

// this can be placed in a separate file and the requested into another file

function findFather (name) {
  for (var i=0; i< data.length; i++) {
    if (name === data[i].name) {
      return data[i].father
    }
  }
}

module.exports = {  // Module Export: above code is exported into an object called findFather
  findPa: findFather,
  findGranPa: findGrandfather
}

// this is used to import the above into another file, into variable family

var family = require('./familyModule') // Module Import *** BUT this external function doesn't have access to the data

// therefore we need to create another function that references this function

function findGrandfather(name) {
  return findFather(findFather(name))
}

// testing below

// // console.log(family.findPa("Carolus Haverbeke") " should be Carel Haverbeke") //finds the father

// console.log(family.findGranPa("Carolus Haverbeke")) //finds the grandfather

// THERE ARE MODULES ON THE INTERNET YOU CAN USE NPMJS.COM

// To install a module inside COMMAND

npm install chai -- save-dev  // -- save is necessary when you share it with other people, it will let them know they need to install chai
                              // -dev  is needed for further development within the community (include the dev tools)

// in package.json
            // in directories: "test": "test" (don't change)
            // in scripts: "test": "mocha" (change to mocha)


