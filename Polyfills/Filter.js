
Array.prototype.myFilter = function(cb){
    let temp = []
    for(let i = 0; i<this.length; i++){
        if(cb(this[i], i, this)) temp.push(this[i])
    }
    return temp
}

arr = [1, 4, 3, 5, 6]

let result = arr.myFilter((num, i, arr)=>{
    return num > 2
})

console.log('result', result)