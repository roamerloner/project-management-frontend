import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../axios';

const  Register = () => {

   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [loading, setLoading] = useState(false);
   const [message, setMessage] = useState("");
   const navigate = useNavigate();

   const handleSubmit = async (e) => {
        e.preventDefault();
         setLoading(true);
         setMessage("");
         navigate('/login');

        try {
            const response = await api.post('/register', {
                name,
                email, 
                password
            });

            const token = response.data.token;
            localStorage.setItem("token", token);
            
           
            setMessage(response.data.message);
        } catch (error) {
            if(error.response && error.response.data.message){
                setMessage(error.response.data.message);
            } else {
                setMessage(error.message);
            } 
        }finally{
            setLoading(false);
        }
    }
  return (
    <div className='flex justify-center items-center h-screen'>
     <form onSubmit={handleSubmit} className="bg-white text-gray-500 w-full max-w-[340px] mx-4 md:p-6 p-4 py-8 text-left text-sm rounded-lg shadow-[0px_0px_10px_0px] shadow-black/10">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>
        
            <input 
            id="name" 
            className="w-full border mt-1 bg-indigo-500/5 mb-2 border-gray-500/10 outline-none rounded py-2.5 px-3" 
            type="text"
            name='name'
            value={name} 
            placeholder="Username"
            onChange={(e) => setName(e.target.value)} 
            required />
            <input 
            id="email" 
            className="w-full border mt-1 bg-indigo-500/5 mb-2 border-gray-500/10 outline-none rounded py-2.5 px-3" 
            type="email"
            name='email'
            value={email} 
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)} 
            required />
            <input 
            id="password" 
            className="w-full border mt-1 bg-indigo-500/5 mb-7 border-gray-500/10 outline-none rounded py-2.5 px-3" 
            type="text"
            name='password'
            value={password} 
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)} 
            required />
        
            <button className="w-full mb-3 bg-indigo-500 hover:bg-indigo-600 transition-all active:scale-95 py-2.5 rounded text-white font-medium">{loading ? "Registering..." : "Create Account"}</button>
            {message && (
                <p>{message}</p>
            )}
            <p className="text-center mt-4">Already have an account? <Link to="/login" className="text-blue-500 underline">Log In</Link></p>
      </form>
    </div>
  )
}

export default Register