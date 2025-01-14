// var, let , const
//Scope

//Scope is a certain region of the code where a defined variable is exsist and can be recogonize as well.
//there are multiple types of scope in javaScript
//Global Scope, Local Scope, Block Scope, Function Scope, Lexical Scope, Closure Scope

/*
//_____________________________________________________________________________________________________________
//Global Scope
var a = 10; //here, a is a global variable and accessable from any where in the code.
let x = 20  //simillarly
const y = 30 //simillarly
console.log(a); // 10
console.log(x); // 20
console.log(y); // 30
//_____________________________________________________________________________________________________________

//_____________________________________________________________________________________________________________
//block scope
{
    var b = 20; //here, b is a local variable but accessable out of this block as well.
    let c = 30; //here, c is a local variable and not accessable out of this block.
    const d = 40; //here, d is a local variable and not accessable out of this
}
console.log(b); //20
console.log(c); //Uncaught ReferenceError: c is not defined
console.log(d); //Uncaught ReferenceError: d is not defined
*/
/* in the above var was accessable from the out side of the block but let and var was not. It means let and const is block scope variable.*/

//_____________________________________________________________________________________________________________

//variable shadowing
//variable shadowing is a situation where a variable in the inner scope has the same name as above scope variable.


/*
function test(){
    let a = 'Hello' //this will print later. Because, let is block scope variable.

    if(true){
        let a = 'Hi'        //this will print first. Because, it is in the inner scope. this will shadow the outer scope variable.
        console.log(a);
    }
    console.log(a);
}
test()

function test1(){
    var a = 'Hello' 
    let b = 'bye'
    if(true){
        let a = 'Hi'  //but if we try to shadow var with let , it will work. Because, var is function scope variable.
        
        var b = 'bye'  //if we try to shadow let with var, it will not work. Because, let is block scope variable. and the rule of shadowing is it can not go out of the block. That is called as illeagal shadowing.
        console.log(a);
        console.log(b);
    }
    console.log(a);
}
test1()
*/

//declearation

var a;
var a; 
//this is absolutely fine to redeclear a variable with var.

// let b
// let b;
//this will throw an error. Because, let is block scope variable. So, redeclearation of same variable is not possible using let. same for the const as well.