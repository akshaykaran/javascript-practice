let name ={
    firstName: "Akshay",
    lastName: "Vinayak"
}

function fullName(city, state){
    console.log(`Hi my name is ${this.firstName + " " + this.lastName} and i am from ${city}, ${state}`)
}

Function.prototype.myApply = function(context = {}, args=[]){
    if(typeof this !== "function"){
        throw new Error(this + "its not callable")
    }

    if(!Array.isArray(args)){
        throw new Error("Invalid Array")
    }

    context.fn = this
    context.fn(...args)
}

fullName.myApply(name, ["Jamshedpur", "Jharkhand"])