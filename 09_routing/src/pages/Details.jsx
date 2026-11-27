import React from 'react'
import {useParams} from 'react-router-dom'


const Details = () => {
    const params = useParams()
    console.log(params)
  return (
    <div>
        <h2>Details of {params.id}</h2>
    </div>
  )
}

export default Details