import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import Scroll from 'react-scroll'
import { ReactComponent as Hamburger } from '../images/hamburger-md.svg'
import './Navbar.css'
const Navbar = () => {

    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)
    }
    const ScrollLink = Scroll.ScrollLink
    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <div className="logo">
                        <b>MP Iron Products</b>
                    </div>
                    <div className="menu-icon" onClick={handleShowNavbar}>
                    <Hamburger></Hamburger>
                    </div>
                    <div className={`nav-elements  ${showNavbar && 'active'}`}>
                    <ul>
                        
                        
                    
                        
                       
                        <li>HOME</li>
                        <li>Services</li>
                        <li>Testimonial</li>
                        <li>Contact</li>
                        <li></li>
                        
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
