import React, { useContext, useState } from 'react'
import Nav1 from './components/Nav1'
import { themedataContext } from './components/ThemeContext'
const App = () => {
const data = useContext(themedataContext)
// console.log(data);

  return (
    <div>
      <Nav1 />
      <h2>{data}</h2>
    </div>
  )
}

export default App