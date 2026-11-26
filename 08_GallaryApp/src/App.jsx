import React, { useEffect, useState } from 'react'

import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([])
  const [page, setPage] = useState(3)

  const getData=async()=>{
    const res =await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=6`)
    // console.log(res.data)
    setUserData(res.data)
    // console.log("user data is ",userData);
  }

  useEffect(()=>{
    getData()
    console.log("use effect running ...")
  },[page])


  return (
    <div className="gallary">
      <nav>
        <h2>Image Gallary:</h2>
      </nav>
      <div className="hero">
        {userData.map((elem, idx) => {
          return (
            <div key={idx} className="card">
              <img src={elem.download_url}/>
            </div>
          );
        })}
      </div>
      <footer>
        <button onClick={()=>{
          if(page>3){
            setPage(page-1)
          }
        }}>Prev</button>
        <h3>{page-2}</h3>
        <button onClick={()=>{
          setPage(page+1)
        }}>Next</button>
      </footer>
    </div>
  )
}

export default App