/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2;
let num = Number(result) //Number function turns the value in result into a number regardless.
console.log("The result is: " + num);

let isValid = Boolean(false); //Boolean function is set to false. The console log should not show up.
if (isValid) {
    console.log("This is valid!");
}

let age = String(25); //Turns the number 25 into a string.
let totalAge = age; //Got rid of the extra 5.
console.log("Total Age: " + totalAge); //Should show up as 25.

//Implicit Type Conversion
console.log("25" * 5);

//Explicit Type Conversion
let string = "31";
let numType = Number(string);
console.log(numType);
console.log(typeof numType);
