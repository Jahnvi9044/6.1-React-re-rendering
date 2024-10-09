import { useState } from 'react'
import React from 'react';

import './App.css'

let counter = 4 ;

function App() {

  const [todos, setTodo] = useState([
    {
       id:1,
       title:"take bath ",
       description:" properly "
    },
    {
      id:2,
      title:"have breakfast ",
      description:"Kings breakfast",
    },
    {
      id:3,
      title:"Go and study ",
      description:" Properly without disattraction "
    }
]);

  function addTodo(){
    counter++;
     setTodo([...todos,{
      id:counter,
      title:"so that you can achieve some thing and get money ",
      description:" And make you parents life , your siblings and your life better ",
     }]);
  }
  return (<div>
    <button onClick={addTodo}>Change todo</button>
    {todos.map(function(todos){
     return  <Todo key = {todos.id} title={todos.title} description={todos.description}></Todo>
        })}

    </div>
  )
}


function Todo({title,description}){

  return (<div>
    <h1>Title:{title}</h1>
   
    <h2>description:{description}</h2>
  </div>)

}
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