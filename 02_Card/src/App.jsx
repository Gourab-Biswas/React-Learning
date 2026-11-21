import React from 'react'
import Card from './components/Card'
import jobCards from './components/Data'





const App = () => {
  return (
    <>
   {jobCards.map((elem,idx)=>{
    return <Card key={idx} data={elem}/>
   })}
    </>
  )
}

export default App