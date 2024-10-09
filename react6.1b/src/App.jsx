import { useState } from 'react'
import React from 'react';

import './App.css'



function App() {


     
  
  return (<div>
    
   <CardWrapper style={{border:"2px solid black"}} innerComponenet ={<TextArea/>} ></CardWrapper>
 

    </div>
  )
}


function TextArea(){
const [val,setVal] = useState("Hi there");

  function reset(){

    const input = prompt("Enter Whatever you wnat :");
    //
    if(input)
      setVal(input)
  }


  return (<div style={{ textAlign:"center"}}>
  
  <h1>{val}</h1>
   <br />
   <button style={{ padding:"15px 50px"  ,margin:"10px" }} onClick={reset} >Change</button>
  </div>)

}

function CardWrapper({style,innerComponenet}){
  return <div style = {style}>
    {innerComponenet}
  </div>
}

export default App


