
// "use strict";

console.log('Learning Javascript');

// using numbers
var num1=12;
var num2=13;
console.log(num1+num2)

// string concatenation 
var string1="Hello"
var strNum=78;
console.log(string1+strNum)

//Number addition
var x = 10;
var y = 20;
var z = "The result is: " + x + y;
console.log(z)


//javascript will convert string to numeric
// all operators(-,/,%) will work except + which is used for concatenating content
var x = "100";
var y = "10";
var z = x / y;   
document.getElementById("demo").innerHTML = z;


//var age=prompt("what is your age")
//console.log(age)
//document.getElementById("demo").innerHTML=age


/*
Functions in java script
*/

function printSomething(a,b)
{
console.log("a soft murmur ...")

return a+b;

}

var result=printSomething(12,12);
console.log(result)


// Function Expressions

var mul=function(a,b){return a*b}
console.log(mul(3,8))

// Function constructer
var fd=new Function("a","b","return a/b");
var vd=fd(100,10);
console.log(vd);


// javascript has function scope and gobal scope befire ecmascript 2015

// after es2015 you can declare block scope using let and const

{
let xfactorblock="block scope";
console.log(xfactorblock);

var yfactorvar="functionscope";

}

console.log(yfactorvar);


/*
Global variables defined with the var keyword belong to the window object:
Global variables defined with the let keyword do not belong to the window object:
*/

/*Javascript Hoisting 
a variable can be declared after it has been used.
Variables and constants declared with let or const are not hoisted!
*/

x = 5; // Assign 5 to x

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x;                     // Display x in the element

var x; // Declare x


/*
JavaScript only hoists declarations, not initializations.
*/
cxx=10;
yxx=200;
console.log(cxx+yxx)


/*
Strictmode
JavaScript in strict mode does not allow variables to be used if they are not declared.
*/

/*
function hoisting
Functions defined using an expression are not hoisted.
*/
console.log(myFunction(5));

function myFunction(y) {
  return y * y;
}



// self invoking functions

(function () {
    var x = "Hello!!"; 
    console.log(x)
    // I will invoke myself
  })();


 // Arrow functions
 /*
 Arrow functions do not have their own this. They are not well suited for defining object methods.

Arrow functions are not hoisted. They must be defined before they are used.
 */
 var afun=(l,o)=>l*o; 
 console.log(afun(100,19))


 /*
 
 JavaScript has dynamic types. This means that the same variable 
 can be used to hold different data types:
 */ 
var carName1 = "Volvo XC60";   // Using double quotes
var carName2 = 'Volvo XC60';   // Using single quotes

var x;           // Now x is undefined
x = 5;           // Now x is a Number
x = "John";      // Now x is a String


//Arrays

var fruitList=["apple","orange","pear","pineapple"];
console.log(fruitList[0]);

var cars = new Array("Saab", "Volvo", "BMW");

var len=cars.length;
var s=cars.sort();

cars.forEach(printCar);


function printCar(car)
{
console.log(car);

}

//In JavaScript, arrays use numbered indexes.  

// In JavaScript, objects use named indexes.

//ECMAScript 5 defines a new method Array.isArray():

cars.join("*");

console.log(cars.toString());


// JS objects
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log(person.firstName);


//In JavaScript, a variable without a value, has the value undefined
var jk;
jk=undefined;

// empty object

var k="";
console.log(k);

// JavaScript that typeof null is an object.

//undefined and null are equal in value but different in type:



//JSON 

//use parse to convert from string to json
// use stringfy to convert from json to string

var obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');

console.log(obj.name);


var obj = { name: "John", age: 30, city: "New York" };
var myJSON = JSON.stringify(obj);

console.log(myJSON);

// events


//Classes
class Car {
  constructor(brand,price) {
    this.carname=brand;
    this.price=price;
  }
  present() {
    return "I have a " + this.carname+" costing RS:"+this.price;
  }

  static specification()
  {
return "XXL";
  }
}

mycar = new Car("Ford",12000);
document.getElementById("demo").innerHTML = Car.specification();

//Unlike functions, and other JavaScript declarations, class declarations are not hoisted.


// Event Bubbling
var parent = document.querySelector('#parent');

  parent.addEventListener('click', function(){
    console.log("Parent clicked");
  });

var child = document.querySelector('#child');

  child.addEventListener('click', function(){
    console.log("Child clicked");
  });

  var gparent=document.querySelector('#gparent');

  gparent.addEventListener('click',function(){
    console.log("grand parent")
  })


  const list = document.querySelector(".list");

list.addEventListener("click", e => {
    e.target.classList.toggle("completed")
})


var counter=document.querySelector("#counter");
var count=0;
counter.addEventListener('click',function(){
count++;
document.getElementById("countertext").innerHTML=count;

})