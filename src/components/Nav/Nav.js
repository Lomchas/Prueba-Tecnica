import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.scss'
import logo from '../../Images/logoWF.png'


const Nav = () => {
  return (
    <div className='container-nav'>
        <nav>
            <div className='container-logo'>
              <img width='200px' src={logo} alt='logo world food'/>
            </div>
            <ul>
                <li><NavLink className={(dataNav) => dataNav.isActive ? 'active' : ''} to="/">Home</NavLink></li>
                <li><NavLink className={(dataNav) => dataNav.isActive ? 'active' : ''} to="/Agg">Agregar Comidas</NavLink></li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav
