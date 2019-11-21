import React from 'react'
import {NavLink} from 'react-router-dom'
import './Cards.css'

export const Card = (props) => {
    return (
        <div className="adventureCards_container">
            <img className="card_photo" src={props.imgUrl} alt="adventure" />
            <p>{props.name}</p>
            <p>{props.description}</p>
            <NavLink exact activeClassName='active' to={`/readmore/${props.id}`}>
            <button>Read More</button>
            </NavLink>
        </div>
    )
}