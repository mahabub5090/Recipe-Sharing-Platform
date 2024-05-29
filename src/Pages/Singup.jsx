// src/Signup.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
const [name, setName] = useState('');
const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(password!==confirm)alert("Password doesn't match !")
    else{
}    
    }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800 py-10">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-1/3">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Sign Up</h2>
        <form onSubmit={handleSubmit}>
        <div className="mb-4">
            <label className="block text-gray-100 text-sm font-bold mb-2" >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={password}
              onChange={(e) => setName(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-100 text-sm font-bold mb-2" >
              Image Link
            </label>
            <input
              type="link"
              id="image"
              value={password}
              onChange={(e) => setUrl(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
       
          <div className="mb-6">
            <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="Confirm">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
          </div>
          <div className='my-5 '>
            <p className='w-96'>Already have an account?<span className='ml-3'><Link to={"/login"}
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Log in
            </Link></span></p>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
