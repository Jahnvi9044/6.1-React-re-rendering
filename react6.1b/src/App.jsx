import { useState } from 'react'
import React from 'react';

import './App.css'



function App() {


     
  
  return (<div>
    
   <CardWrapper style={{border:"2px solid black"}} innerComponenet ={<TextArea/>} ></CardWrapper>
   <CardWrapper style={{border:"2px solid black"}} innerComponenet ="Hello" ></CardWrapper>
   <CardWrapper style={{border:"2px solid black"}} innerComponenet = {<div>
      Hello I am in div
   </div>} ></CardWrapper>

 

    </div>
  )
}


function TextArea(){
const [val,setVal] = useState("Hi there");

  function reset(){

    const input = prompt("Enter Whatever you wnat :");
    // this is done so that the input 
    if(input)
      setVal(input)
  }


  return (<div style={{ textAlign:"center"}}>
  
  <h1>{val}</h1>
   <br />
   <button style={{ padding:"15px 50px"  ,margin:"10px" }} onClick={reset} >Change</button>
  </div>)

}


//Card Wrapper Treats everthing inside inner
function CardWrapper({style,innerComponenet}){
  return <div style = {style}>
    {innerComponenet}
  </div>
}

export default App


