import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from "./Component/Header";
import Photos from "./Component/Photos";
//import { defaultMethod } from "react-router-dom/dist/dom";
import SignUp from "./Component/SignUp";
import SumNumber from "./Component/SumNumber";
import TaskScreen from "./Component/TaskScreen";
import higherOrderComponent from "./Component/Hoc";
import SampleRenderProps from "./Component/SampleRenderProps";

const App =()=>{

const TestApp=higherOrderComponent(()=>{
  return<div>Test App</div>
})

  return(
    <div>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path={"/"} element={<h1>Thid is a home page</h1>}/>
    <Route path={"/contact"} element={<h1>Thid is a Contact page</h1>}/>
    <Route path={"/about"} element={<h1>Thid is a About page</h1>}/>
    <Route path={"/signup"} element={<SignUp/>}>
    <Route path={"/sum"} elemnet={<SumNumber/>}/>
    </Route>
    <Route path={"/tasks"} element={<TaskScreen/>}/>
    <Route path={"/photos"} element={<Photos/>}/>
    <Route path={"/test"} element={<TestApp/>}/>
    <Route path={"/sample"} element={<SampleRenderProps/>}/>
    </Routes>
    
    
    </BrowserRouter>
    </div>
  )
}
export default App;


















// import React from 'react'
// import SignUp from './Component/SignUp';
// //import AllUserList from './Component/AllUserList'
// //import './App.css';
// //import Name from './Component/Name';
// //import SumNumber from './Component/SumNumber';



// const App=()=>{
// return(
//   <div>
//     {/* <AllUserList/> */}
//    {/* <Name/> */}
//    {/* <SumNumber/> */}
//   <SignUp/>
//   </div>
// )
// }

// export default App;