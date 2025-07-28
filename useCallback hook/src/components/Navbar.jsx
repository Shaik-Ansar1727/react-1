import React, { memo } from 'react'
import { useMemo } from 'react'

const Navbar = ({number,setadjective}) => {
    console.log('hello')  
  return (
    <div>
        
      IM a pretty Navbar
      {number}
    <button onClick={()=>{
        setadjective()
    }}>Click me</button>

<div>{setadjective()}</div>

    <br />
    <br />



    

    <br />

    </div>
  )
}

export default memo(Navbar)  
