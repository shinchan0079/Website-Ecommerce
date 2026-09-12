import React from 'react'
import {BrowserRouter as Router, Routes, Route }  from 'react-router-dom'
import Shop from './Pages/Shop'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Gallery from './Pages/Gallery'
import Header from './Components/Header'
import Footer from './Components/Footer'


const App = () => {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App