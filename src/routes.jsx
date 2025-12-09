import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ProtecterRoute from './components/ProtecterRoute';


function Layout() {
  const location = useLocation();
  const showNavbar = ["/", "/login", "/register"].includes(location.pathname);
return(
      <>
        {showNavbar && <Nav />}
          <Routes>
            {/* Protected Routes */}
            <Route 
            path='/dashboard' 
            element={
            <ProtecterRoute>
                <Dashboard />
            </ProtecterRoute>
            }/>

            {/* Public Routes */}
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
            {/* <Route path='/contact' element={<Contact />}/>
            <Route path='/about' element={<About />}/>  */}
          </Routes>
      </>
);
}


function AppRouter() {
  return (
   <BrowserRouter>
     <Layout/>
   </BrowserRouter>
  )
}

export default AppRouter