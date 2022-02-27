"use strict"

Array.prototype.fakeMap = function(callback){

    let arr = []
    if(this.length === 0){
        return new Error(`Array is empty`)
    };
    for(let i = 0; i < this.length; i++){
        arr.push(callback(this[i],i,this))
    }
    return arr;
}

const numbers = [2,2,2];
const doubles = numbers.fakeMap((num) => num > 1);
console.log(doubles)
console.log(numbers)