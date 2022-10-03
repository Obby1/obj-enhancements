// Object Enhancements Exercise
function createInstructorOld(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
  };
}

// ES2015

function createInstructorNew(firstName, lastName) {
  return {
    firstName,
    lastName,
  };
}

// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt",
// };

// instructor[favoriteNumber] = "That is my favorite!";



//ES2015

const favoriteNumber = 42;
const instructor = {
firstName: `Colt`,
favoriteNumber: `That is my favorite!`

}

// instructor[favoriteNumber] = `That is my favorite!`

// Object Methods
var instructor2 = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi!";
  },
  sayBye: function(){
    return this.firstName + " says bye!";
  }
}

//ES 2015

const instructor3 = {
  firstName: `Colt`,
  sayHi(){
    return `Hi!`;
  },
  sayBye(){
    return this.firstName + 'says bye!';
  }
}

function createAnimal(species, verb, noise){
  return {
  species,
  [verb](){
    return noise;
  }

  }}


// Computed Property Names

// function makeObj(first, last, age) {
//   return {
//     first,
//     last,
//     age,
//     isAlive: true,
//   };
// }

// const mathStuff = {
//   x: 200,
//   add(a, b) {
//     return a + b;
//   },
// };
