//The reduce method is used to apply a function to each item in an array and reduce it to a single value.

//pollyfill for the reduce 

Array.prototype.myReduce = function (callback, initialValue) {
    var accumulator = initialValue;
    for(let i = 0; i < this.length; i++) {
        if(accumulator == accumulator){
            accumulator = callback(accumulator, this[i], i, this);
        }else{
            accumulator = this[i]
        }
    }
    return accumulator;
}


const numbers = [1, 2, 3, 4, 5];
// I want to add all the element in this array
const sum = numbers.myReduce((accumulator, current) => {
    return accumulator + current; //here accumulator will be the previous result and current will be the next elements. 
},0)
console.log(sum); // Output: 15