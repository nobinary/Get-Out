import React from 'react'
import {NavLink} from 'react-router-dom'
import './Nav.css'
import Widget from './../Widget/Widget'

const Nav = () => {
    return (
    <div className="nav_container">
        <NavLink exact activeClassName='active' to='/'>
        <img className="logo" src={require("./../../media/SVG/Asset 6.svg")} alt="logo" />
        </NavLink>
        <Widget className="widget" />
    </div>
    )
}

export default Nav