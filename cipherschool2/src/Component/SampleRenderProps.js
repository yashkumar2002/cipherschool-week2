import React from "react";
import RenderPropsComponent from "./Component/RenderPropsComponent";
import {useCookies} from 'react-cookie'


const SampleRenderProps=()=>{
    
        const[cookies,setCookie,removeCookie]=useCookies(["name"])
        console.log(cookies)
        
        
        return(
            <RenderPropsComponent
            render={()=>{
                return(
                    <div>
                        <h2 onClick={(e)=>setCookie("age",20)}>This is from render props</h2>
                        </div>
                )
            }}
            />
        )
    
}
export default SampleRenderProps;