import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from './pages/home'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/search" element={<search/>}/>
        <Route path="/cart" element={<cart/>}>
      </Routes>
    </Router>
  )
}

export default App