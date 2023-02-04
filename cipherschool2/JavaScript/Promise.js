let addNumbers=(...args)=>{
    let sum=0
    for(let el of args){
        sum+=el;
    }

return   new Promise((resolve,reject)=>
{
   setTimeout(()=>{
       resolve(sum)
   },3000)
})
}

let testFunction=async ()=>{
    try{
    let sum =await addNumbers(1,2,3,4,5,6)
     console.log(sum)
}catch(err){
    console.log(err)
}
}
testFunction()






// let addNumbers=(...args)=>{
//     let sum=0
//     for(let el of args){
//         sum+=el;
//     }

// return   new Promise((resolve,reject)=>
// {
//    setTimeout(()=>{
//        resolve(sum)
//    },3000)
// })
// }

// let testFunction=()=>{
//     addNumbers(1,2,3,4,5,6,7,8,9)
//     .then((result)=>{
//         console.log(result)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })
// }
// testFunction()