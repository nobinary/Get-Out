import React from 'react'
import {NavLink} from 'react-router-dom'
import './Cards.css'

export const Card = (props) => {
    console.log(props)
    return (
        <div className="adventureCards_container">
            <img className="card_photo" src={props.imgUrl} alt="adventure" />
            <p className="adv_name">{props.name}</p>
            <p>{props.description}</p>
            <NavLink exact activeClassName='active' to={`/readmore/${props.id}`}>
            <img alt="img" className="read_more" src={require("./../../media/SVG/read_more.svg")}/>
            </NavLink>
        </div>
    )
}