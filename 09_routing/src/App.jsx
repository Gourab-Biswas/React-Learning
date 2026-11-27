import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import { Route, Routes } from 'react-router-dom'
import Men from './pages/Men'
import ErrorPage from './pages/ErrorPage'
import Women from './pages/Women'
import Details from './pages/Details'
import Navbar2 from './components/Navbar2'

const App = () => {
  return (
    <>
      <Navbar/>
      <Navbar2/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/about/:id' element={<Details/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product' element={<Product/>}>
          <Route index element={<h2>Product Page</h2>}/>
          <Route path='men' element={<Men/>}/>
          <Route path='women' element={<Women/>}/>
        </Route>
        <Route path='/*' element={<ErrorPage/>}/>
      </Routes>
    </>
  )
}

export default App