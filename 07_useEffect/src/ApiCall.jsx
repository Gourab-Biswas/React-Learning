import React from 'react'
import axios from 'axios'
const ApiCall = () => {

    const callApi = async()=>{
        // console.log("api called");
        // let res = await fetch("https://jsonplaceholder.typicode.com/posts/1")
        // const data = await res.json()
        // console.log(res)
        // console.log(data)
        const res =await axios.get("https://jsonplaceholder.typicode.com/posts/1")
        console.log(res);
        
    }



  return (
    <div>
        <button onClick={callApi}>Click me</button>
    </div>
  )
}

export default ApiCall