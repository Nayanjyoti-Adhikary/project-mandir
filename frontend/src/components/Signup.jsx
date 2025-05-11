import React from 'react'

const Signup = () => {
  return (
    <>
    <div>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="w-full max-w-sm p-6 bg-white rounded-2xl shadow-lg">
    <h2 className="text-2xl font-bold text-center mb-6">Get Started Now</h2>
    
    <form className="space-y-4">
      <input type="text" placeholder="Enter your name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" />
      
      <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" />
      
      <input type="password" placeholder="Password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600" />
      
      <div className="flex items-center">
        <input type="checkbox" id="terms" className="mr-2" />
        <label htmlFor="terms" className="text-sm">I agree to the <a href="#" className="text-blue-600 underline">terms & policy</a></label>
      </div>
      
      <button type="submit" className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800">Signup</button>
    </form>
    
    <div className="my-4 flex items-center justify-between">
      <hr className="w-full border-gray-300" />
      <span className="mx-2 text-gray-400">or</span>
      <hr className="w-full border-gray-300" />
    </div>
    
    <div className="flex flex-col space-y-2">
      <button className="flex items-center justify-center w-full px-4 py-2 border rounded-md">
        <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5 mr-2" alt="Google" />
        Sign in with Google
      </button>
      <button className="flex items-center justify-center w-full px-4 py-2 border rounded-md">
        <img src="https://www.svgrepo.com/show/303128/apple-logo.svg" className="w-5 h-5 mr-2" alt="Apple" />
        Sign in with Apple
      </button>
    </div>
    
    <p className="mt-4 text-center text-sm">
      Have an account? <a href="#" className="text-blue-600 font-medium">Sign in</a>
    </p>
  </div>
</div>


    </div>
    </>
  )
}

export default Signup