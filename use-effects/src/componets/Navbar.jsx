import React from 'react'
import { useEffect } from 'react';
const Navbar = ({count}) => {
    useEffect(() => {
      alert('hello there');
    },[])
    useEffect(() => {
      
    alert('count was changed so i m coming')
    }, [count])
    
    
  return (
    <div>
      hello there im  navbar  {count}
    </div>
  )
}

export default Navbar
