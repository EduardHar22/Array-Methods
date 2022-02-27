// "use strict"

Array.prototype.fakeEvery = function(callback){

    if(this.length === 0){
        return false
    };
    for(let i = 0; i < this.length; i++){
        if(!callback(this[i],i,this)){
            return false
        }
    }
    return true
}



let arr = [2,4,6,8,9];
console.log(arr.every(el => el % 2 === 0))


