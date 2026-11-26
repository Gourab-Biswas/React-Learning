import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
        <div className='m-w'>
            <Link to="men"><h3>Mens</h3></Link>
            <Link to="women"><h3>Womens</h3></Link>
        </div>
        {/*  <h2>Product Page</h2> */}
        {/*! write it inside nested routes !*/}
        <Outlet/>
    </div>
  )
}

export default Product