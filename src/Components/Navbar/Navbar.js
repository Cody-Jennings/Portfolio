import React from 'react'
import './Navbar.css'
import { NavLink } from "react-router-dom"
//import { useRef } from 'react'
import { useState, useEffect } from 'react'

function NavBar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    return (
        <>
            <nav className='navbar'>
                <div className='nav-container'>
                    <NavLink exact to='/' className='nav-logo'>
                        CJ
                        <i className="fas fa-code"></i>
                    </NavLink>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <NavLink exact to='/' activeclassName='active' className='nav-links' onClick={handleClick}>
                                Home
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink exact to='/about' activeclassName='active' className='nav-links' onClick={handleClick}>
                                About
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink exact to='/projects' activeclassName='active' className='nav-links' onClick={handleClick}>
                                Projects
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink exact to='/contact' activeclassName='active' className='nav-links' onClick={handleClick}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    <div className='nav-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar

