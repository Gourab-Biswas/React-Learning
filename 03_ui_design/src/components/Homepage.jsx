import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Homepage = (props) => {
    // console.log(props.data)
  return (
    <div className='home'>
        <Leftcontent/>
        <Rightcontent data={props.data}/>
    </div>
  )
}

export default Homepage