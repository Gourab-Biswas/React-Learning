import React from 'react'
import Card from './components/Card'

const App = () => {
  let arr = [{name:"gourab",age:20},{name:"Isha",age:16}]
  return (
    <>
    {arr.map((ele,idx)=>{
      console.log(ele)
      return <div key={idx}>
            <Card data={ele}/>
      </div>
      
    })}
    </>
  )
}

export default App