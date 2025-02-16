//console.log("" > -1);
//output true...
// JavaScript performs type coercion (automatic type conversion) when comparing different data types. Here's the step-by-step evaluation:

// Empty String ("") Conversion:

// JavaScript converts the empty string "" to a number during comparison.
// An empty string is treated as 0 when converted to a number.
// So the above code is console.log(0 > -1) which is true

//console.log("" == true);
//output false...
// Reason:
// JavaScript uses type coercion when comparing values with == (loose equality). Let's analyze step-by-step:
// Boolean to Number Conversion (true → 1):

// JavaScript converts the true boolean value to the number 1 for comparison.
// Empty String to Number Conversion ("" → 0):

// An empty string "" is treated as 0 when converted to a number.
// Comparison (0 == 1):

// After type conversion, the expression becomes:
// javascript
// Copy code
// 0 == 1
// Clearly, 0 is not equal to 1.
// Loose Equality (==) allows type coercion, which may lead to unexpected results.
// Strict Equality (===) does not perform type coercion, so it's more predictable and should be preferred in most cases.

// console.log(Number("") === 0);     // true (explicit conversion)
// console.log(Number(true) === 1);  // true (explicit conversion)
// console.log(0 == 1);              // false

//console.log("greater" > "elephant");
// output true
// Reason:
// In JavaScript, string comparisons are done lexicographically (dictionary order) based on Unicode values of characters.

// Compare the first characters ('g' vs 'e'):

// Unicode value of 'g' = 103
// Unicode value of 'e' = 101
// Comparison:

// Since 103 > 101, JavaScript immediately determines that "greater" is greater than "elephant" without checking further characters.
// Key Observations:
// Lexicographical Order: It works like alphabetical order but uses Unicode values.
// Case Sensitivity: 'A' < 'a' because uppercase letters have lower Unicode values than lowercase letters.
// Comparisons stop as soon as a difference is found.
// Uppercase letters (A–Z) have lower Unicode values than lowercase letters (a–z).
// This is why 'A' is considered less than 'a'.

// console.log("answer" > "Answer");

// const x = NaN !== NaN;
// console.log(x);
// The IEEE 754 floating-point standard, which JavaScript follows, specifies that NaN should never be considered equal to any value, including itself.
// console.log(typeof typeof 100); returns a string

// Importing the module from modules.js
import tryModules from "./modules.js";
console.log(tryModules());

// Explain the building blocks of React.
// The five main building blocks of React are:

// Components: These are reusable blocks of code that return HTML.
// JSX: It stands for JavaScript and XML and allows you to write HTML in React.
// Props and State: props are like function parameters and State is similar to variables.
// Context: This allows data to be passed through components as props in a hierarchy.
// Virtual DOM: It is a lightweight copy of the actual DOM which makes DOM manipulation easier.
