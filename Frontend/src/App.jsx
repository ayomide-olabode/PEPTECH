import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import Publications from "./Pages/publications/publications"

const App = () => {
  return (
    <div>
      {/* Navigation */}
      {/* <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="/publications">Publications</Link> |{' '}
      </nav> */}

      {/* Routes */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/publications" element={<Publications />} />
        {/* <Route path="*" element={<NotFound />} /> Catch-all route */}
      </Routes>
    </div>
  )
}

export default App
