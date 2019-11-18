import React from 'react'
import './adventurecards.css'

export const Card = (props) => {
    return (
        <div className="adventureCards_container">
            <p>{props.name}</p>
            <p>{props.description}</p>
        </div>
    )
}