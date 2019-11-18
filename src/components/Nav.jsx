import React from 'react'
import {NavLink} from 'react-router-dom'
import './nav.css'

const Nav = () => {
    return (
    <div className="nav_container">
        <NavLink exact activeClassName='active' to='/'>
        <img className="logo" src={require("./../media/SVG/Asset 6.svg")} alt="logo" />
        </NavLink>
        <img className="widget" src={require("./../media/SVG/Asset 1.svg")} alt="widget" />
        {/* <Widget /> */}
    </div>
    )
}

export default Nav