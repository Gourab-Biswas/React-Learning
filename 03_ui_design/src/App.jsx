import React from 'react'
import Page1 from './components/Page1'

const App = () => {
  const arr = [{
    img:"https://i.pinimg.com/736x/dc/82/b2/dc82b2e0f27db0eaadca6a851b002b15.jpg",
    title:"Prime customers, that have access to bank credit and are satisfied with the current product",
    tag:"Satisfied",
    id:1
  },
 {
    img:"https://i.pinimg.com/736x/72/c7/b0/72c7b088b0e1a8c75f4c131e439fea9d.jpg",
    title:"Prime customers, that have access to bank credit and are not satisfied with the current service",
    tag:"Underserved",
    id:2
  },
  {
    img:"https://i.pinimg.com/736x/28/40/1b/28401bf689257b51fff65d05b6eb9ab2.jpg",
    title:"Customers from near-prime and sub-prime segments with no access to bank credit Prime customers,",
    tag:"Underbanked",
    id:3
  },
]
  return (
    <div>
      <Page1 data={arr}/>
    </div>
  )
}

export default App