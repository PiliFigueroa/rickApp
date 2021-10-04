import React from 'react'
import './Header.css'

const Header = () => {

    const navigation = [
        {
            id: 1,
            icon: "bi-alarm",
            name: "Home"
        },
        {
            id: 2,
            icon: "bi bi-badge-tm-fill",
            name: "Characters"
        },
        {
            id: 3,
            icon: "bi bi-bar-chart-line-fill",
            name: "Contacto"
        }
    ]

    return(
        <nav className="nav">
            <h2>Logo</h2>
            <div className="nav-buttons">
                {navigation.map(icon => <i key={icon.id} className={icon.icon}>{icon.name}</i>)}
            </div>
        </nav>
    )
}

export { Header }