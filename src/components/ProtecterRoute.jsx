import React from 'react'
import { Navigate } from 'react-router-dom';

function ProtecterRoute ({children}) {
 const token = localStorage.getItem("token");

 //If no token we redirect to login page

 if(!token){
    return <Navigate to='/login' replace/>
 }

 //Otherwise
 return children;
}

export default ProtecterRoute