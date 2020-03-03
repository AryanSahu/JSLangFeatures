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
