import React from 'react'
import './Card.css'

const Card = ({ character }) => {

    const { image, name, gender, species, status, location } = character

    return(
        <div className="card-container">
        <img src={image} alt={name} />
        <div className="description">
            <h3>{name}</h3>
            <ul>
                <li><b>Genre:</b> {gender}</li>
                <li><b>Species:</b> {species}</li>
                <li><b>Status:</b> {status}</li>
                <li><b>Location:</b> {location.name}</li>
            </ul>
        </div>
    </div>
    )
}

export { Card }