export const testAPI=(a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(a+b);
        },15000)
    })
}


export let tasks=[
    {
        taskNumber:1,
        taskName:"task 1",
        taskDescription:"This is task1"

    },
    {
        taskNumber:2,
        taskName:"task 2",
        taskDescription:"This is task2"

    },
    {
        taskNumber:3,
        taskName:"task 3",
        taskDescription:"This is task3"

    },
]
export const getAllTasks=()=> 
         new Promise((resolve,reject)=>
         {
            setTimeout(()=>{
                resolve(tasks)
            },3000)
         })

//Create 2 component
//1 AllTasks
//Fetch a list of all tasks when the component to the screen ans render it.
//Every tasks will have a delete button when clicked the task gets delet
//when the task is delete print in console that a task was delet using componentDidupdat
//Task
//when the user click on a task it should display the task details
//Fetch info of a task using taskNiumber