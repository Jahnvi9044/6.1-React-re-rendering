import { useState } from 'react'
import React from 'react';

import './App.css'


function App() {

  const [count, setCount] = useState(0);

  function change(){
     setCount(Math.random());
  }
  return (
    <>
     <button onClick={change}>Change the title</button>
      <Harkirat title={count}></Harkirat>
      <Harkirat title="hi2"></Harkirat>
      <Harkirat title="hi3"></Harkirat>
      <Harkirat title="hi4"></Harkirat>
      <Harkirat title="hi5"></Harkirat>
      <Harkirat title="hi6"></Harkirat>
      <Harkirat title="hi7"></Harkirat>
      <Harkirat title="hi8"></Harkirat>
      <Harkirat title="hi9"></Harkirat>
      <Harkirat title="hi10"></Harkirat>
      <Harkirat title="hi11"></Harkirat>

     
    </>
  )
}

const Harkirat = React.memo(function({title}){

  return <div>
    {console.log({title})}
    My name is {title}
  </div>

});

export default App




/*
 1. 

function App() {
  const [count, setCount] = useState(0)
  function change(){
     setCount(Math.random());
  }
  return (
    <>
     <button style={{
      
      padding:10
     }} onClick={change}>Change the title</button>
      <Harkirat title={count}></Harkirat>
      <Harkirat title="hi2"></Harkirat>
     
    </>
  )
}

function Harkirat({title}){

  return <div>
    My name is {title}
  </div>

}

export default App
*/



/*

2. Shifting the component down 

function App() {
 
  return (
    <>
      <HeaderWithbutton/> 
      <Harkirat title="h2"></Harkirat>
      <Harkirat title="hi2"></Harkirat>
     
    </>
  )
}
 
function HeaderWithbutton(){
  const [count, setCount] = useState(0)
  function change(){
    setCount(Math.random());
 }
 return <div>
     <button onClick={change}>Change the title</button>
     <Harkirat title={count}></Harkirat>
</div>
}
function Harkirat({title}){
 
  return <div>
    My name is {title}
  </div>

}

export default App




*/


/**
 
3. React.memo


  The Component which you want not to re-render should be made using React.memo 
  so that so that they re render only when some thing gets changed in them.



  
  function App() {

  const [count, setCount] = useState(0);

  function change(){
     setCount(Math.random());
  }
  return (
    <>
     <button onClick={change}>Change the title</button>
      <Harkirat title={count}></Harkirat>
      <Harkirat title="hi2"></Harkirat>
      <Harkirat title="hi3"></Harkirat>
      <Harkirat title="hi4"></Harkirat>
      <Harkirat title="hi5"></Harkirat>
      <Harkirat title="hi6"></Harkirat>
      <Harkirat title="hi7"></Harkirat>
      <Harkirat title="hi8"></Harkirat>
      <Harkirat title="hi9"></Harkirat>
      <Harkirat title="hi10"></Harkirat>
      <Harkirat title="hi11"></Harkirat>

     
    </>
  )
}

const Harkirat = React.memo(function({title}){

  return <div>
    {console.log({title})}
    My name is {title}
  </div>

});



 */