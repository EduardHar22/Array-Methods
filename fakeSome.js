"use strict"



Array.prototype.fakeSome = function(callback){
    if(this.length === 0){
        return new Error(`Array is empty!!!`)
    }
    for(let i = 0; i < this.length; i++){
        if(callback(this[i],i,this)){
            return true;
        }
    }
    return false;
}
let arr = [2,4]
console.log(arr.fakeSome(el => el % 2 === 1))

