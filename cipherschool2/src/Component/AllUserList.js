// import React, {Component, useState} from "react";
// import UserDetail from "./UserDetail";
// import TestA from './TestA.js'


// // const AllUserList =()=>{
// //     const [state,setState]=useState({
// // //         name:"Ritesh"
// // //     })


// // //     let allUser=[
// // //         {
// // //             name:"jhon",
// // //             email:"jgon@gmail.xom",
// // //             phoneNumber:"+91-987564654",
// // //         },
// // //         {
// // //             name:"Rhon",
// // //             email:"Rjon@gmail.xom",
// // //             phoneNumber:"+91-887564654",
// // //         }, {
// // //             name:"pphon",
// // //             email:"poon@gmail.xom",
// // //             phoneNumber:"+91-777564654",
// // //         },
// // //     ];
  
// // // let setStateName=(name)=>{
// // //     setState({...state,name})
// // // }
// // // return(
// // //         <div>
// // //           <TestA user={state.name} setName={setStateName}/> 
// // //  {allUser.map((user,index)=>(
// // //     <UserDetail key={index} user={user}/>
// // // ))}
// // //         </div>
// // // )

// // //  }

// // class AllUserList extends Component{
    
// //     state={
// //         name:"Priya sexena"
// //     }    

// //     setStateName={name}=>{
// //         this.setStat({...this.state,name});
// //     }
// //     allUser=[
// //                 {
// //                     name:"jhon",
// //                     email:"jgon@gmail.xom",
// //                     phoneNumber:"+91-987564654",
// //                 },
// //                 {
// //                     name:"Rhon",
// //                     email:"Rjon@gmail.xom",
// //                     phoneNumber:"+91-887564654",
// //                 }, {
// //                     name:"pphon",
// //                     email:"poon@gmail.xom",
// //                     phoneNumber:"+91-777564654",
// //                 },
// //             ];
// //     render ()(
// //         return(<>
// //             <Test name={this.state.name} setName={this.setStateName}/>
// //             {
// //                 this.props.allUsers.map((user,index)=>(
// //                     <userDetails keys={index} user={user}/>
// //                 ))
// //             }
// //         </>
// //         )
// //     )

// // }


// export default AllUserList;


// //object are not vaild react child
// //we canonot print object
// //state always present in component
// //whenever state of value change component is going to rerender



// // const AllUserList=()=>{
// //     let allUser=[
// //         {
// //             name:"jhon",
// //             email:"jgon@gmail.xom",
// //             phoneNumber:"+91-987564654",
// //         },
// //         {
// //             name:"Rhon",
// //             email:"Rjon@gmail.xom",
// //             phoneNumber:"+91-887564654",
// //         }, {
// //             name:"pphon",
// //             email:"poon@gmail.xom",
// //             phoneNumber:"+91-777564654",
// //         },
// //     ];

// // // let array=[
// // //     <UserDetail user={allUser[0]}/>,
// // //             <UserDetail user={allUser[1]}/>,
// // //             <UserDetail user={allUser[2]}/>,
// // // ]


// // // let array=allUser.map((user,index)=>(
// // //     <UserDetail key={index} user={user}/>
// // // ))
// // //js object to jsx
// //     return(
// //         <div>
// //             {/* <UserDetail user={allUser[0]}/>
// //             <UserDetail user={allUser[1]}/>
// //             <UserDetail user={allUser[2]}/> */}
// //  {allUser.map((user,index)=>(
// //     <UserDetail key={index} user={user}/>
// // ))}
// //         </div>
// //     )
// // };

// // 
// // class AllUserList extends React.Component{
// //     state={
// //     allUser:[
// //         {
// //             name:"jhon",
// //             email:"jgon@gmail.xom",
// //             phoneNumber:"+91-987564654",
// //         },
// //         {
// //             name:"Rhon",
// //             email:"Rjon@gmail.xom",
// //             phoneNumber:"+91-887564654",
// //         }, {
// //             name:"pphon",
// //             email:"poon@gmail.xom",
// //             phoneNumber:"+91-777564654",
// //         },
// //     ],
// //   }
// // render(){
// //     return(
// //         <div>
          
// //  {this.allUser.map((user,index)=>(
// //     <UserDetail key={index} user={user}/>
// // ))}
// //         </div>
// //     )
// // }
// // }
// // 

// // const AllUserList =()=>{
// //    const [state,setState]=useState({name:"Ritehs"});
// // return(
// //     <h1>The nameis{state.name}</h1>
// // )