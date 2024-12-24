
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Navbar from "./Components/Navbar"
import './App.css'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path="/contact" element={<Contact></Contact>}></Route>

          {/* //<Route path='*' element={<h1>404 page is not found</h1>}/> */}
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
