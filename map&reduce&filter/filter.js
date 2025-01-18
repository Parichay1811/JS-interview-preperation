//filter:
    // filter takes each element in an array and it applies a conditional statement agained it, if it returns true, it includes it in the new array, if it returns false, it excludes it from the new array.
    //in short it filters out the elements that do not meet the condition.
    //Pollyfill of filter
    
    Array.prototype.myFilter = function(cb){
        let newArray = [];
        for(let i = 0; i < this.length; i++){
            if(cb(this[i], i, this)){
                newArray.push(this[i]);
            }else{
                continue;
            }
        }
        return newArray;
    }

    const arr = [2, 5, 8, 1, 9];

    const moreThanFive = arr.myFilter((e) => {
        if(e > 5){
            return true;
        }else{
            return false;
        }
    })
    console.log(moreThanFive); // [8, 9] it includes the only element those are greater than 5 into the new array.

