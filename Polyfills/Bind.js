let name ={
    firstName: "Akshay",
    lastName: "Vinayak"
}

function fullName(city, state){
    console.log(`Hi my name is ${this.firstName + " " + this.lastName} and i am from ${city}, ${state}`)
}

Function.prototype.myBind = function(context = {}, ...args){
    if(typeof this !== "function"){
        throw new Error(this + "its not callable")
    }

    context.fn = this
    
    return function(...newArgs){
        return context.fn(...args, ...newArgs)
    }
}

let newFunc = fullName.myBind(name, "Jamshedpur", "Jharkhand")
console.log(newFunc())