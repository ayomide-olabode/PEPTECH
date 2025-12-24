import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import Publications from "./Pages/publications/publications"

const App = () => {
  return (
    <div>
      {/* Routes */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/publications" element={<Publications />} />
      </Routes>
    </div>
  )
}

export default App
