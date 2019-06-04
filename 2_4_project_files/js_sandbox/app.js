


//---------------There are 2 types of data types of date type----------------//

// 1. PRIMITIVE (Stored directly in the location that the variable accessess.)
  //It's stored on the stack.
  //When you access Primative data, you access it by it's value.



// String (Sequences of characters- Letters, Numbers, Symbols)
const name = 'John Doe';
console.log(typeof name); //string
console.log(name);


// Number (Integers, decimals, floats in JS)
const age = 45; //No ""


// Boolean (True, False)
const hasKids = true; //No ""


// Null (Intintional empty value)
const car = null; //Says "Object" in JS, which is "kind've a bug"


// Undefined (Varaible that has not been assigned a value) all variables are undefined as default.
//You will get an error if you don't define a constant

let test; //
console.log(typeof test); //undefined


// Symbol (from ES6)
const sym = Symbol();
console.log(typeof sym);






// 2. REFERENCE TYPES (OBJECTS that are accessed by REFERENCE, not by an actual value)
  //Data is not actually stored in the variable, it's stored on the "heap."
    //Heap is dynamically allicated memory
  //It's a pointer to a location in the memory.


// Array
const hobbies = ['movies', 'music', 'Fishing', 'Reading'];
console.log(typeof hobbies); //object

// Object literal
const address = {
  city: 'Cookeville',
  state: 'TN'
}
const today = new Date();
console.log(today);
console.log(typeof today);

//Functions

//Dates

//Anything else that you can store