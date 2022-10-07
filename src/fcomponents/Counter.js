import {useState} from 'react'



const Counter = () => {
   const [counter,setCounter]= useState(0);
   
   const plus = () =>{
    setCounter(counter+1)
   }
   const minus = () =>{
    setCounter(counter-1)
   }
   const reset = () =>{
    setCounter(0)
   }


   
  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={plus}>Plus</button>
        <button onClick={minus}>Minus</button>
        <button onClick={reset}>Reset</button>
        </div>
  )
  }

export default Counter