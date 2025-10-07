
Array.prototype.myMap = function(cb){
    let temp = []
    for(let i = 0; i<this.length; i++){
        temp.push(cb(this[i], i, this))
    }
    return temp
}

arr = [1, 2, 3, 5, 6]

let result = arr.myMap((num, i, arr)=>{
    return num * 2
})

console.log('result', result)