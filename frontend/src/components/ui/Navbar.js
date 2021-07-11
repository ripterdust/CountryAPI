import React from 'react';
import { NavLink, Link } from 'react-router-dom';


export const Navbar = () => {
    return <nav className="style_navbar">
        <NavLink exact to='/'>
            Countries
        </NavLink>
        <Link className="nav-link" to='/'>Home</Link>
        <NavLink to='/cities'>
            Cities
        </NavLink>
    </nav>
}
