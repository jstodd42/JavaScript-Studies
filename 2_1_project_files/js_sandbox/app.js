
//Start
//var, let, const

//-------------What are var's?----------
//1. var is when you set a variable. Not commonly used anymore according to Brad T. 

//2. variables can include letters, numbers, _, and $
    //Don't use $ unless you are writing with jQuery and you're selecting things from the DOM.

    //_'s are used for private variables and frameworks.

//3. Can't start with a number (var 1name = 'John';)

//Example of a var

//var name = 'John Doe';

//console.log(name);

//Once a variable is set, you don't have to re-add
//var (Name), you can just say what the var =.
//var name = 'John Doe';
//name = 'Steve Smith';

//console.log(name); //Will console.log "Steve Smith."

//Init Var = This means to Init a variable by //setting a var and then the variable, but not //setting it equal to anything.

//Example

// var greeting;

//DIFFERENT than var greeting = "Hello World";

////This would currently be undefined, but now the //variable can be set to something.

////Example

//greeting = "Hello";
//console.log(greeting);

////Sometimes, you might not want to initialize the //value without a variable. Ex. var greeting, if you //have a conditional. Example, "if something is true, //then "greeting" else, then "other var here"."

//Multi Word var

//var firstName = "Jacy"; //camelCase
   //Camel case is the most tradition
//var first_name = "Rose"; //Underscore convention
//var FirstName = "Mary"; //Pascal case=Same as //camel, but starts with an uppercase as well.
//Used a lot in object oriented programming and //when creating a contructor funtion, when you //create an ES6 class

//let

//let name = 'John Doe';
//console.log(name);




//Const - stands for "constant" and lets people who see your code know that this valu should not be reassigned.
//Const can mutate if it's an array or an object, but it cannot be reassigned as a new primative value.

//const name = 'Grace';
//console.log(name);
//Can't reasign
//Have to assign a value


const person = {
  name: 'John',
  age: 30
}

person.name = 'Sarah';

//console.log(person);

//Arrays (start at 0)

const numbers = [1,2,3,4,5];

console.log(numbers); 

//push is a method we can use to add onto an array

//example to add the number 6 to our list of numbers above/

numbers.push(6);

console.log(numbers); 
