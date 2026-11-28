import React, { useContext } from 'react'
import { themedataContext } from './ThemeContext'

const Nav3 = () => {
    const daataa = useContext(themedataContext)
  return (
    <div>
        <h5>{daataa}</h5>
    </div>
  )
}

export default Nav3