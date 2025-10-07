let name ={
    firstName: "Akshay",
    lastName: "Vinayak"
}

function fullName(city, state){
    console.log(`Hi my name is ${this.firstName + " " + this.lastName} and i am from ${city}, ${state}`)
}

Function.prototype.myCall = function(context = {}, ...args){
    if(typeof this !== "function"){
        throw new Error(this + "its not callable")
    }

    context.fn = this
    context.fn(...args)
}

fullName.myCall(name, "Jamshedpur", "Jharkhand")