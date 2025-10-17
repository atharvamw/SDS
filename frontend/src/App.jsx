import { useContext, useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import Members from "./pages/Members.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import Navbar from './components/Navbar.jsx'
import { AuthContext } from './context/Auth.jsx'

function App() {

  const Auth = useContext(AuthContext);

  useEffect(()=>{

      

  }, [])

  return (
    <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/members" element={<Members/>}/>
          <Route path="/login" element={<LoginPage/>}/>
        </Routes>
        

        <footer className='text-black bg-gray-400 mt-3 flex flex-col items-center'>
          <p>© 2024 SDS, COEP. All Rights Reserved. Designed by SDS</p>
          <p>Made with ❤️ in COEP</p>
        </footer>
    </Router>
  )
}

export default App
