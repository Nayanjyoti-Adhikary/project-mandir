import React from 'react';
import Navbar from './Navbar';
import Login from '../pages/Loginpage';
import { useNavigate } from 'react-router-dom'

const Hero = () => {

  const navigate=useNavigate()
  const redirectToSignup=()=> {navigate('./signup') }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <div className="text-5xl font-extrabold text-center">
        Welcome to Satsang TU
      </div>
      <div className="text-lg italic text-center">
        joy guru !! Vande purosotamam
      </div>
      <div>
        <button onClick={redirectToSignup} className="bg-black text-white rounded-2xl px-6 py-3 text-lg hover:bg-gray-800 transition duration-300 ease-in-out">
          Get started
        </button>
      </div>
    </div>
  );
};

export default Hero;
