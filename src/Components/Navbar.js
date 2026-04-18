import React, { useState, useEffect, useCallback } from "react"
import PropTypes from 'prop-types'
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

const navLinkClass = ({ isActive }) => (isActive ? "nav-link--active" : undefined);

function Navbar(props){
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const closeMenu = useCallback(() => setMenuOpen(false), []);
    const toggleMenu = useCallback(() => setMenuOpen((o) => !o), []);

    useEffect(() => {
        closeMenu();
    }, [location.pathname, closeMenu]);

    useEffect(() => {
        if (!menuOpen) return undefined;
        const onKey = (e) => {
            if (e.key === "Escape") closeMenu();
        };
        document.addEventListener("keydown", onKey);
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = prev;
        };
    }, [menuOpen, closeMenu]);

    const titleParts = props.heading.split(" — ");

    return(
        <>
            <nav className={`site-nav${menuOpen ? " site-nav--menu-open" : ""}`} aria-label="Main">
            <NavLink className="site-nav__brand" to="/dailynews-app" end onClick={closeMenu}>Digital News</NavLink>

            <ul className="site-nav__links" id="site-nav-drawer">
                <li><NavLink className={navLinkClass} to="/dailynews-app" end onClick={closeMenu}>Home</NavLink></li>
                <li><NavLink className={navLinkClass} to="/breaking" onClick={closeMenu}>Breaking</NavLink></li>
                <li><NavLink className={navLinkClass} to="/business" onClick={closeMenu}>Business</NavLink></li>
                <li><NavLink className={navLinkClass} to="/entertainment" onClick={closeMenu}>Entertainment</NavLink></li>
                <li><NavLink className={navLinkClass} to="/world" onClick={closeMenu}>World</NavLink></li>
                {/* <li><NavLink className={navLinkClass} to="/health" onClick={closeMenu}>Health</NavLink></li> */}
                {/* <li><NavLink className={navLinkClass} to="/science" onClick={closeMenu}>Science</NavLink></li> */}
                {/* <li><NavLink className={navLinkClass} to="/sports" onClick={closeMenu}>Sports</NavLink></li> */}
                <li><NavLink className={navLinkClass} to="/technology" onClick={closeMenu}>Technology</NavLink></li>
            </ul>

            <div className="site-nav__actions">
                <button
                    type="button"
                    className="site-nav__menu-btn"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    aria-controls="site-nav-drawer"
                    onClick={toggleMenu}
                >
                    <span className="site-nav__menu-icon" aria-hidden="true">
                        <span />
                        <span />
                        <span />
                    </span>
                </button>
                <span className="site-nav__credit">
                    <span className="site-nav__credit-prefix">Created by </span>
                    <span className="site-nav__credit-name">Prikshit Goyal</span>
                </span>
            </div>

            <button
                type="button"
                className="site-nav__backdrop"
                aria-label="Close menu"
                tabIndex={menuOpen ? 0 : -1}
                onClick={closeMenu}
            />
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
