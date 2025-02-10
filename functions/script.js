//Q1 --- What is function declearation ?

/* function declearation is nothing but when we declear a function 
function add(a, b) { //function declearation
    return a + b;
} */


//Q2 --- What is function expression?

/* function expression is nothing but when we assign a function to a variable.
function expression is also known as anonymous function.

var add = function(a, b) {  //function expression
    return a + b;
}  
console.log(add(3, 4)) // 7    
*/

//Q3 --- What is First class function?
/* // First class function is nothing but a function that can be treated as a variable. and also manipulate and return it.

function sum(a, b){
    return a + b;
}

function returnSum(fn){
    console.log('sum is: ' + fn(8, 9));
}
returnSum(sum);  */

//Q4 --- IIFE
/* //IIFE is Immediately Invoked Function Expression. It is a function that runs as soon as it is defined. 
(function square(num){
    console.log(num * num);
})(3); // 9 */


//Q5 ---- Params vs Arguments
/* function square(nums){      //Params: When we define a function with parameters
    console.log(nums * nums);
}
square(5)       //Argument: When we pass values to a function while calling it. */

//Q6 ---- Rest parameters and spread operator

var arr = [5,7]
function mul(...nums){  //when we are using this ...nums as parameters is called as rest parameters
    console.log(nums[0] * nums[1]);
}
mul(...arr) // 35  // when we are using this ...arr as arguments is called as spread operator.