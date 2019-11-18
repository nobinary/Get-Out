import React from 'react'
import './nav.css'

const Nav = () => {
    return (
    <div className="nav_container">
        <img className="logo" src={require("./../media/SVG/Asset 4.svg")} alt="logo" />
        <img className="widget" src={require("./../media/SVG/Asset 1.svg")} alt="widget" />
        {/* <Widget /> */}
    </div>
    )
}

export default Nav