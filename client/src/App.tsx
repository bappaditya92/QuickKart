import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Cart from './pages/cart'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/search" element={<search/>}/>
        <Route path="/cart" element={<Cart/>}>
      </Routes>
    </Router>
  )
}

export default App