import React from 'react'
import './GetAdventure.css'
import {NavLink} from 'react-router-dom'

const GetAdventure = () => {
    return (
        <div className='search_container'>
             <div className='search_widget'>
             <NavLink exact activeClassName='active' to='/adventures'>             
             <img className="get_adventure" src={require("./../../media/SVG/roadsign.svg")} alt="widget" onClick="{/adventures}" />
             </NavLink>
            </div>
        </div>
    )
}

export default GetAdventure