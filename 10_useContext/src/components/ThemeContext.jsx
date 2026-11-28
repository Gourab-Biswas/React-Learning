import React, { Children, createContext } from 'react'


export const themedataContext=createContext()
const ThemeContext = (props) => {

    
  return (
    <div>
        <themedataContext.Provider value="GB">
        {props.children}
        </themedataContext.Provider>
    </div>
  )
}

export default ThemeContext