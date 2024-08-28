// 1. Create a variable called carName, assign the value Volvo to it.


let carName = "Valvo" ; 
console.log(carName);


//  2..So What Will Be The 1st Variable Name, Then 2nd Variable Values & 
// 3rd Variable Name And Values Both! 

let firstName = "John";  // write variable name
let lastName = "Doe" //write variable values 
let BothName = firstName + lastName ; // write variable name and values both 

console.log(BothName);

// 3.Use the correct assignment operator that will 
// result in x being 50 (same as x = x * y). 

x = 10;
y = 5;
x =  (x * y) // what will be the value of x ? 
console.log(x);

//4.Use comments to describe the correct data type of the following variables:

let length = 16; // data type ?   Number type data type

console.log(typeof length);


let lastName1 = "Johnson"; // data type ?  string data type
console.log(typeof lastName);

const x1 = {
  firstName: "John",  
  lastName: "Doe"
};    // data type ?   Ovject type data type

console.log(typeof x1); 



// 5. Execute the function named myFunction.
 
 let Function1 =  function myFunction() {
  alert("Hello World!");
}

console.log(Function1);

// call the function and see the output 


// 6.  Create an object called person with name = John, age = 50, Then, access the object to alert("John is 50").  Create an object called person with 




                                // problem Headers


//  let myObj = {
//     name :"John",
//     age :50,    
// };

//  console.log(alert(myObj.name + " is " + myObj.age) );



// 7.. <!-- The <button> element should do something when someone clicks on it. Try to fix it! -->

// index.html file resorce




// 8. Alert the number of items in an array, using the correct Array property: 

// const cars = ["Volvo", "Jeep", "Mercedes"];
// console.log(alert(cars.length)); 


// 2. Change the first item of Brand to "Ford".

	// const Brand = ["Volvo", "Jeep", "Mercedes"]; 

    // Brand[0] = "Ford";
    // console.log(Brand);


    // 9.Use the correct Math method to create a random number.

    const randomNub = Math.random();
    console.log(randomNub);

    // Use the correct Math method to return the largest number of 10 and 20.
    const randomNum1 = Math.max(10, 20);
    console.log(randomNum1);


    // 10. Choose the correct comparison operator to alert true, when x is greater than y.
    
    
// x = 10;
// y = 5;


// console.log( alert(x > y) );



// 2. Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".


// let age = 16;
// alert(age < 18 ? "Too young" : "Old enough");




// JavaScript Basic Problem Solving  PART 2 

//   Number 1
function celsiusToFahrenheit(celsius) {
    return celsius *9/5 +32 ;

  }
  
  console.log(celsiusToFahrenheit(0)); // 32
  console.log(celsiusToFahrenheit(25)); // 77

// Number 2


function isEven(num) {
    return num % 2 ===0; 
  }
  
  console.log(isEven(4)); // true
  console.log(isEven(7)); // false
  
// Number 3

function sum(a, b) {
    return a+ b;
  }
  
  console.log(sum(3, 4)); // 7
  console.log(sum(10, 20)); // 30


//   number 4 

function findSmallestNum(arr) {
    return Math.min(...arr);
  }
  
  console.log(findSmallestNum([3, 5, 1, 9])); // 1
  console.log(findSmallestNum([-1, -5, 0, 10])); // -5
  
  
// Number 5

function countVowels(str) {
    let vowels = 'aeiouAEIOU';

    return str.split('').reduce((count, char) => {
        return vowels.includes(char) ? count + 1 : count;
      }, 0);
    }
  console.log(countVowels("hello world")); // 3
  console.log(countVowels("Javascript")); // 3
  



// number 6 

function getFirstElement(arr) {
    return arr[0];
  }
  
  console.log(getFirstElement([1, 2, 3])); // 1
  console.log(getFirstElement(["a", "b", "c"])); // "a"

// Number7

function isArrayEmpty(arr) {
    return arr.length === 0;
  }
  
  console.log(isArrayEmpty([])); // true
  console.log(isArrayEmpty([1, 2, 3])); // false
  
  

//   Number 8

function factorialize(num) {
    if (num === 0 || num === 1) return 1;
    return num * factorialize(num-1);
  }
  
  console.log(factorialize(5)); // 120
  console.log(factorialize(7)); // 5040
  


// Number 9


function reverseString(str) {
    return str.split('').reverse().join();
  }
  
  console.log(reverseString("hello")); // "olleh"
  console.log(reverseString("world")); // "dlrow"

// Number 10

function toLowerCase(str) {
    return str.toLowerCase();
  }
  
  console.log(toLowerCase("HELLO WORLD")); // "hello world"
  console.log(toLowerCase("JavaScript")); // "javascript"


// Number 11 

function stringLength(str) {
    return str.length;
  }
  
  console.log(stringLength("hello")); // 5
  console.log(stringLength("world")); // 5
  
  
// Number 12

function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
  }
  
  console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
  console.log(mergeArrays(["a", "b"], ["c", "d"])); // ["a", "b", "c", "d"]
  

//   NUmber 13

function getLastElement(arr) {
    return arr[arr.length - 1];
  }
  
  console.log(getLastElement([1, 2, 3])); // 3
  console.log(getLastElement(["a", "b", "c"])); // "c"
  


//   Number 14

function getFirstCharacter(str) {
    return str[0];
  }
  
  console.log(getFirstCharacter("hello")); // "h"
  console.log(getFirstCharacter("world")); // "w"
  


//   Number 15

function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num , 0);
  }
  
  console.log(sumArray([1, 2, 3, 4])); // 10
  console.log(sumArray([-1, -2, -3, -4])); // -10
  console.log(sumArray([1.5, 2.5, 3.5])); // 7.5
  