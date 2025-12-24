import React from 'react'
import './Navabar.css'
const Navbar = () => {
  return (
    <div>
    <nav>
        <ul className='Navbar'> 
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Contact</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link> to="/useState"Usestate</Link></li>
        </ul>
    </nav>
    </div>
  )
}

export default Navbar