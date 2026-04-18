import React from "react"
import PropTypes from 'prop-types'
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar(props){
    const titleParts = props.heading.split(" — ");

    return(
        <>
            <nav className="site-nav" aria-label="Main">
            <NavLink className="site-nav__brand" to="/dailynews-app" end>Digital News</NavLink>
            <ul className="site-nav__links">
            <li><NavLink className={({ isActive }) => isActive ? "nav-link--active" : undefined} to="/dailynews-app" end>Home</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? "nav-link--active" : undefined} to="/business">Business</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? "nav-link--active" : undefined} to="/entertainment">Entertainment</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? "nav-link--active" : undefined} to="/health">Health</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? "nav-link--active" : undefined} to="/science">Science</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? "nav-link--active" : undefined} to="/sports">Sports</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? "nav-link--active" : undefined} to="/technology">Technology</NavLink></li>
            </ul>
            <input className="site-nav__search" type="search" placeholder="Search…" aria-label="Search" readOnly />
            </nav>
            <header className="page-hero">
            <h1 className="page-hero__title">
                {titleParts[0]}
                {titleParts[1] ? <span> — {titleParts[1]}</span> : null}
            </h1>
            <div className="page-hero__line" aria-hidden="true" />
            </header>
        </>
    )
}

export default Navbar;

Navbar.propTypes = {
    heading: PropTypes.string
}

Navbar.defaultProps = {
    heading: "HELLO"
}
