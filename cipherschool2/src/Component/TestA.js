import React from 'react'
import PropTypes from "prop-types"
const TestA=({name="",setName})=>{
    return(<>
        <h1>The naem is : {name}</h1>
         <input
         type="text"
         value={name}
         onChange={(e)=>setName(e.target.value)}
         
         />
        
        </>
   
   
    )
}

TestA.propTypes={
    name: PropTypes.string,
    setName: PropTypes.func,
}

export default TestA;

//event handling