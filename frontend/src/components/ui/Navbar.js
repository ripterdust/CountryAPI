import React from 'react';
import { NavLink, Link } from 'react-router-dom';


export const Navbar = () => {
    return <nav>
        <Link className="nav-link" to='/'>Home</Link>
        <div className="link">
            <NavLink exact to='/'>
                Countries
            </NavLink>
            <NavLink to='/cities'>
                Cities
            </NavLink>
        </div>
    </nav>
}
