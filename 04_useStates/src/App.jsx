import React, { useState } from 'react'

const App = () => {

const [first, setfirst] = useState({user:"gb",age:20})

const [arr,setArr]= useState([1,2,3,4])

const [num, setNum] = useState(0)

let btnhandler = () =>{
  // setfirst(pr=>({...pr,user:"ig"}))

  // setArr(prev=>([...arr,77]))

  setNum(prev=>(prev+1))
  setNum(prev=>(prev+1))
  setNum(prev=>(prev+1))
  setNum(prev=>(prev+1))
  setNum(prev=>(prev+1))
}


  return (
    <div>
      <h1>{num} </h1>
      {/* <h1>{arr}</h1> */}
      <button onClick={btnhandler}>increase</button>
    </div>
  )
}

export default App