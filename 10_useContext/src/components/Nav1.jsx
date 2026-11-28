import React, { useContext } from 'react'
import Nav2 from './Nav2'
import { themedataContext } from './ThemeContext'

const Nav1 = () => {
    const data = useContext(themedataContext)
  return (
    <div className='nav1'>
<h1>LOGO</h1>
<h2>{data}</h2>
<Nav2 />
    </div >
  )
}

export default Nav1