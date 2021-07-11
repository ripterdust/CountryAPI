import React from 'react';
import { NavLink, Link } from 'react-router-dom';


export const Navbar = () => {
    return <nav className="style_navbar">
        <NavLink exact to='/countries' className="style_navbar_link" activeClassName="style_navbar_active">
            Countries
        </NavLink>
        <Link className="style_navbar_link_home" to='/'>Home</Link>
        <NavLink to='/cities' className="style_navbar_link" activeClassName="style_navbar_active">
            Cities
        </NavLink>
    </nav>
}
