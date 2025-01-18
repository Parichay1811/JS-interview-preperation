/* //Map, reduce and filter is a metho d of array. By iterate on an array it can be used to perfom a transformation or computation.

//Map method is used to creating a new array from the exsisting one by applying a function to the each one of the element of the first array.
//pollyfill for map

Array.prototype.myMap = function(cb){ //prototype i s a property of the object that allows you to add new properties to the object. here we are adding the map method to the array object.
    const newArr = [];
    for(let i = 0; i < this.length; i++){ //loop through the array. 'this' keyword is used to refer to the array.
        newArr.push(cb(this[i], i, this)); //push the result of the callback function to the new array.
    }
    return newArr;
}

const arr = [1, 2, 3, 4, 5];

const multiplyByTwo = arr.myMap((num, idx, arr) => {      //map takes a callback function as an argument where the first argument is the current element, the second is the index of the current element and the third is the array itself.
    return num * 2 + " : " + idx;      //return the result of the operation

})
console.log(multiplyByTwo); //[ 2, 4, 6, 8, 10 ] returns a new array with the result of the operation applied to each element of the original array.




//map vs forEach 

const array = [4, 5, 6, 7, 8];

const mapValue = array.map((ar) => { //this can return a new array with the result of the operation applied to each element of the original array.
    return ar * 2; 
})
const forEachValue = array.forEach((ar, i) => {  //this can not return a new array with the result of the operation applied to each element of the original array.
    array[i] = ar * 2;
})

console.log(mapValue, forEachValue, array);
 */

//Question 1: What is the output of the following code:
const numbers = [1, 2, 3, 4, 5];
const doubleNumbers = numbers.map((num) => num * 2);
console.log(doubleNumbers); // [2, 4, 6, 8, 10]

//Question 2: You are given an array of objects with the details of students. 
//            --> Print all the names in uppercase.
//            --> Return the names of students who are above 18 years old.
//            --> Find the sum of grades of all students.
//            --> REturn only names who scored above 90 in the exam.
//            --> Return total marks for students with marks greater than 90 after 20 marks has been added to their marks to those who scored less 90.

let students = [
    { name: "John", age: 20, marks: 90 },
    { name: "Jane", age: 21, marks: 85 },
    { name: "Bob", age: 19, marks: 95 },
    { name: "Alice", age: 20, marks: 80 }
]

const names = students.map(stu => stu.name.toLocaleUpperCase());
console.log(names); //1st

const age = students.filter((stu) => stu.age > 20)
console.log(age); //2nd

const sumOfTheMarks = students.reduce((accumulator, curr) => accumulator + curr.marks, 0);
console.log(sumOfTheMarks); //3rd

const nameWithAbove90 = students.filter((stu) => stu.marks > 90).map((stu) => stu.name);
console.log(nameWithAbove90); //4th

//5th

const totalMarks = students.map((stu) => {
    if(stu.marks < 90){
        stu.marks += 20;
    }
    return stu;
}).filter((stu) => stu.marks > 90).reduce((accumulator, curr) => accumulator + curr.marks, 0);
console.log(totalMarks); //5th