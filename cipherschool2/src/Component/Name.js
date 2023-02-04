import React, {useState, Component} from 'react'

// class Name extends Component {
//     state ={name: "Shsntsnu Shubhan"};

// constructor(props){
//     super(props);
//     this.setName=this.setName.bind(this);
// }


// setName(e){
//     this.setState({...this.state, name:"Ritesh"});
// }


//     render(){
//         return (
//         <>
//           <h1>The name is : {this.state.name}</h1>
//          <button onClick={this.setName}>Click Me</button>
    
//         </>
//     )
// }
// }
class Name extends Component {
//         
}
 export default Name;

//multiple event handlink
// class Name extends Component {
//     state ={name: "Shsntsnu Shubhan"};

// setName=(name)=>{
// this.setState({...this.state,name});
// }

// testHandler=()=>{
// console.log("testhandler")
// }

// render() {
// return (
//     <>
//     <h1>The name is:{this.state.name}</h1>
//     <button onClick={()=>{
//         this.setName("Ritesh kumar");
//         this.testHandler=("Second one")
//         }}>
//             Click Me</button>
//     </>
// )
// }
// }

//this will work fine
//  const Name=()=>{
//     const [state,setState]=useState({name:"This is usestate"});
//     let setName=(e)=>{
//         setState({...state, name:"Ritesh"});
//     }
//     return(
//         <>
//         <h1>Th ename is:{state.name}</h1>
//         <button onClick={setName}>Click me</button>
//         </>
//     )

// }

//diff between arrow and normal
//this code give error
// import React, {Component} from 'react'

// class Name extends Component {
//     state ={name: "Shsntsnu Shubhan"};

// setName(e){
//     this.setState({...this.state, name:"Ritesh"});
// }


//     render(){
//         return (
//         <>
//           <h1>The name is : {this.state.name}</h1>
//          <button onClick={this.setName}>Click Me</button>
    
//         </>
//     )
// }
// }

// export default Name;
// import React, {Component} from 'react'

// class Name extends Component {
//     state ={name: "Shsntsnu Shubhan"};

// setName(e){
//     this.setState({...this.state, name:"Ritesh"});
// }


//     render(){
//         return (
//         <>
//           <h1>The name is : {this.state.name}</h1>
//          <button onClick={function(){this.setName("Ritesh kumar")}}>Click Me</button>
    
//         </>
//     )
// }
// }

// export default Name;