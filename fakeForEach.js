"use strict"




Array.prototype.fakeForEach = function(callback){
    if(this.length === 0){
        return new Error(`Array is empty`)
    };

    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
};
let arr = [1,2,3,4,5]
arr.fakeForEach((el,i) => console.log(el + i))

