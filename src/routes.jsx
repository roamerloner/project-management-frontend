import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function AppRouter() {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path='' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        {/* <Route path='/contact' element={<Contact />}/>
        <Route path='/about' element={<About />}/>  */}
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter