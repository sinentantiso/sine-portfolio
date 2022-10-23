import {useRef} from "react"
import React from "react"
import {FaBars, FaTimes} from "react-icons/fa"

function Navbar () {
  const navRef = useRef();
  
  const showNavbar = () =>{
    navRef.current.classList.toggle("responsive_nav")
  }
  return(
   <>
    <header>
      <h3>Sine</h3>
      <nav ref = {navRef}>
        <a href="#">Header</a>
        <a href="#">About</a>
        <a href="#">Skills</a>
        <a href="#">Projects</a>
        <a href="#">Contacts</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes/>
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars/>
      </button>
    </header>
   </>
  )
}

export default Navbar;

