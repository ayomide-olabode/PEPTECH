import React from 'react'
import { Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
const App = () => {
  return (
    <>
    <Navbar />
      <Routes>
          <Route path="/" element={<Home/>}/>

      </Routes>
    </>
  )
}

export default App
