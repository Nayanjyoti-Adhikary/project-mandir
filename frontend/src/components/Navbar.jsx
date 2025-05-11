import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  const handleRedirectToSignup = () => {
    navigate('/signup')
  }
  const redirectToHome=()=> {
    navigate('/')
    
  }
  return (
    <div className='flex justify-between items-center p-5'>
        <div>Satsang TU</div>
        <div className='flex space-x-5 items-center'>
            <div className='hover:cursor-pointer' onClick={redirectToHome}>Home</div>
            <div>Pronami</div>
            <div>
                <button onClick={handleRedirectToSignup} className='border-2 p-2 rounded-xl hover:bg-amber-200 hover:cursor-pointer'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
