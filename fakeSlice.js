"use strict"

Array.prototype.fakeSlice = function(start = 0, end = 0){
    let arr = []
    if(start === 0 && end === 0){
        return this;
    }
    if(start < 0 ){
        start = this.length + start
    }
    if(end < 0){
        end = this.length + end
    }
    for(let i = start; i < this.length ; i++){
        if(i === end) break
        else {
            arr.push(this[i])
        }
    }
    return arr
}
let arr1 = ['ant', 'bison', 'camel', 'duck', 'elephant']
console.log(arr1.fakeSlice(0,-2))
