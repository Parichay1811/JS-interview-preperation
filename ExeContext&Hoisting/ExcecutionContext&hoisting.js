/* 
    //Excecution context in JavaScript

    //Execution context is the environment in which JavaScript code is executed. It is the scope in which variables , functions, and objects are defined.

    // there is two phase of execution context, first is creation phase and second is execution phase. in the creation phase , the execution context is created and the variables and functions are defined. in the execution phase, the code is executed.
    let a = 10;

    function multiply (x){
        return x * 5;
    }

    let b = multiply(a);
    console.log(b);

    //in the above code , the execution context is created when the function multiply is called. the variable a is defined in the execution context and the function multiply is defined in the execution context. the function multiply is executed and the result is returned and stored in the variable b. the console.log(b) is executed and there is no error.
    //at the creation stage the variable a and b will be innitialize as 'undefined' and at the execution stage the variable a and b will be assigned the value 10 and 50 respectively. 
*/


//hoisting

        //during the creation phase the javaScript engine moves our variable and function declarations to the top of the execution context/ top of the code. this is called hoisting.

        // console.log(count); //undefined
        // var count = 1; //this is a variable declaration and not an assignment. it is hoisted to the top of the execution context .

        // //the code looks like 
        // var count
        // console.log(count);
        // count = 1;

        //for let this will throw an error that "can't access variable before it's declared!". this is because let is block scoped and not function scoped like var. let is hoisted but it is not initialized. it is in a "temporal dead zone" until it is declared.

        //temporal dead zone: this is a region in the code where the variable is not accessible before initialized. it is a region between the variable declaration and the initialization.
//Question on hoisting:
        function abc(){
            console.log(a,b,c);
            let b = 20
            const c = 34
            var a = 10;
        }
        abc(); 

