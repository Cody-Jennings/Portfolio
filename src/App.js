// setting up my SPA routes by importing all pages from react router
import './App.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Home from './Pages/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Projects from './Pages/Projects/Projects'



function App() {
    return (
        <>
            <Navbar />
            <div className="pages">
                
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </>
    )
}

export default App
