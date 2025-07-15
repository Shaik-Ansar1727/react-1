import React from 'react'
import { useContext } from 'react'
import { countercontext } from '../Context/context'
const Button = () => {
    const count = useContext(countercontext)
  return (
    <div>
      Button in Component 
      <br />
      {count.count}
      <br />
      <button onClick={()=>{count.setCount((count)=>count+1)}} >click me</button>
   
    
   
   
   </div>
  )
}

export default Button
