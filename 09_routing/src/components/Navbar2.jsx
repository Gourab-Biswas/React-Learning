import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
    const navigate = useNavigate()
  return (
 <>
 <button className='navbtn' onClick={()=>{
 navigate("/")
 }}>go to main</button>
 <button className='navbtn' onClick={()=>{
    navigate(-1)
 }}>pre</button>
 <button className='navbtn' onClick={()=>{
    navigate(+1)
 }}>Next</button>
 </>
  )
}

export default Navbar2