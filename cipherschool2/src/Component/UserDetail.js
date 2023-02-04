import React,{useState} from 'react'


// 
const UserDetail=({user ={}})=>{
    const [h1Text, setH1Text]=useState("This is food");
    
         return(
             <div>
                         <h3>{user.name}</h3>
                          <h5>
                              Email:{user.email}
                              <br/>
                              Phone Number :{user.phoneNumber}
                          </h5>
                          <h1>{h1Text}</h1>
                          <button 
                          onClick={(e)=>{
                            setH1Text("This is road")
                        }}
                            >Click me
                          </button>
             </div>
         )
}

export default UserDetail


//props are read only memory
//not modify props property 
//should not change props inside child component



// //const UserDetail=({user= {}})=>{
//     const UserDetail=(props)=>{
//     //const UserDetail=({user={}})=>{  //use alone
//     //let user=props.user;
      
//     let {user}=props;
//     return(
//         <div>
//             <h3>{user.name}</h3>
//             <h5>
//                 Email:{user.email}
//                 <br/>
//                 Phone Number :{user.phoneNumber}
//             </h5>
//         </div>
//             );
// };

// 
// class UserDetail extends React.Component {
//  render(){
//     this.props.user={
//         name:"Alex",
//         email:"adfdfkf@gmil",
//         phoneNumber:465666544
//     };
//          return(
//              <div>
//                          <h3>{this.props.user.name}</h3>
//                           <h5>
//                               Email:{this.props.user.email}
//                               <br/>
//                               Phone Number :{this.props.user.phoneNumber}
//                           </h5>
//              </div>
//          )
//      }
//  }