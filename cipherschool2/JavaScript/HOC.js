const add=(a,b)=>{
    return a+b
}

const higherOrder=(a, referenceFunction)=>{
    return referenceFunction(a,20)
}
console.log(higherOrder(30,add))

// when afunction is passes as a functional argument to afunction then the function which is passed ia s callback
//ans the function to which it is passed is a higher order function

//const NewComponent= higherOrderComponent(WrappedComponent)->Syntax