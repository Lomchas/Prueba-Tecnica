import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Nav.css'


export default class Nav extends Component {
  render() {
    return (
    <div className='header-nav'>
        <nav className='nav'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Agg">Agregar Comidas</Link></li>
            </ul>
        </nav>
    </div>
    )
  }
}
