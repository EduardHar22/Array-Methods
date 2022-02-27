"use strict"

let myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];


Array.prototype.fakeSplice = function(start, count){
    let arr = []
    let sumCount = 0
    if(start < 0){
        start = this.length + start
    }
    for(let i = start; i < this.length; i++){
        arr.push(this[i])
        sumCount++
        if(sumCount === count){break}
    }
    return arr;
};

console.log(myFish.fakeSplice(-2,1))

