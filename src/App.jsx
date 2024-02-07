import React, { useState } from 'react'

function App() {
  let [counter,setcounter]= useState(0)

  const addvalue = ()=>{
    if(counter>19){
      console.log("Value cannot be added");
    }
    else{
      setcounter(counter+1)
    }
  }

  const removevalue = ()=>{
    if(counter<1){
      console.log("Value cannot be removed");
    }
    else{
      setcounter(counter-1)
    }
  }


  return (
   <>
    <h1>Counter Value:{counter}</h1>
   <button onClick={addvalue}>Add Value:</button>
   <button onClick={removevalue}>Remove Value:</button>
   </>
  )
}

export default App