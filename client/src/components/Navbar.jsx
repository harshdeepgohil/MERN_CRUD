import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='container mb-5'>
        <NavLink to="/AddUser">Add-User</NavLink>&nbsp;&nbsp;&nbsp;
        <NavLink to="/DispUser">Disp-User</NavLink>
      </nav>
    </div>
  )
}

export default Navbar