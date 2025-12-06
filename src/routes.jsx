import React from 'react'
import Welcome from './components/Welcome'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home';
import Contact from './pages/Contact'
import About from './pages/About'

function AppRouter() {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path='' element={<Home />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/about' element={<About />}/> 
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter