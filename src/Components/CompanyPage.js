import React from 'react'
import {Router, NavLink} from 'react-router-dom'

const CompanyPage = () => {

  return (
    <Router>
    <div className='navbar'>
      <div className='navbar-logo'>Website</div>
      <ul>
        <li>
          <NavLink>Home</NavLink>
        </li>
        <li>
          <NavLink></NavLink>
        </li>
        <li>
          <NavLink></NavLink>
        </li>
        <li>
          <NavLink></NavLink>
        </li>
      </ul>
    </div>
    </Router>
    
  )
}

export default CompanyPage