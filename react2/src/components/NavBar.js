import React from "react"
import { NavLink } from "react-router-dom"

export const NavBar = () => {
    return (
        <nav className='primary-nav'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/persons'>Person</NavLink>
        </nav>
    )
}