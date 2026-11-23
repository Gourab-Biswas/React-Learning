import React from 'react'
import Navbar from './Navbar'
import Homepage from './Homepage'

const Page1 = (props) => {
  return (
    <div>
        <Navbar/>
        <Homepage data={props.data}/>
    </div>
  )
}

export default Page1