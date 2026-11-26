import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div className='nav'>
        <h1>LOGO</h1>
        <div className="items">
            <Link to="/"><p>Home</p></Link>
            <Link to="/about"><p>About</p></Link>
            <Link to="/product"><p>Product</p></Link>
            <Link to="/contact"><p>Contact</p></Link>
            {/* <a href="/about">about</a> */}
        </div>
    </div>
  )
}

export default Navbar