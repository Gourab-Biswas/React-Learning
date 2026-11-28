import React, { useContext, useState } from 'react'
import Nav3 from './Nav3'
import { themedataContext } from './ThemeContext'

const Nav2 = () => {
    const data = useContext(themedataContext)
    const [first, setfirst] = useState('Theme')
    
  return (
    <div className='nav2'>
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Contact</h4>
        <h4>{first}</h4>
        <button onClick={()=>{
            setfirst(data)
        }}>Change</button>
        <Nav3/>
    </div>
  )
}

export default Nav2