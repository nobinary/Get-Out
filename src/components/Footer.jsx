import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <div className='footer_container'> 
            <img className="footer_heart" src={require("./../media/SVG/heart.svg")} alt="logo" />
        </div>
    )
}

export default Footer