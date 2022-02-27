"use strict"

Array.prototype.fakeFilter = function(callback){

    let array = [];
    if(this.length === 0){
        return new Error(`Array is empty`)
    };
    if(!callback(this[i],i,this)){
        return array
    }
    for(let i = 0; i < array.length; i++){
        array.push(callback(this[i],i,this))
    }
    return array
}

const arr = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];



console.log(arr.filter(el => el < 20))