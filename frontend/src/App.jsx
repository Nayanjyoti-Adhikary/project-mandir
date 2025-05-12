import React from 'react'
import Landing from './pages/Landing'
import SignupPage from './pages/SignupPage'
// import Signup from './components/signup'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Loginpage from './pages/Loginpage'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/hello' element={<div>Hello World!</div>} />
      <Route path ='/signup' element={ <SignupPage />} />
    <Route path ='/login' element={ <Loginpage />} />
      {/* <Route path='' */}
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App