import React from "react"
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import "./Navbar.css";


// let a = "React";

function Navbar(props){
    return(
        <>
            <nav className="nav1 fixed-top">
            <b id="tag11">Digital News</b>
            <li className="li1"><Link to="/">Home</Link></li>
            <li><Link to="/business">Business</Link></li>
            <li><Link to="/entertainment">Entertainment</Link></li>
            <li><Link to="/health">Health</Link></li>
            <li><Link to="/science">Science</Link></li>
            <li><Link to="/sports">Sports</Link></li>
            <li><Link to="/technology">Technology</Link></li>
            {/* <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li> */}
            <input className="search1" placeholder="Search Here"></input>
            </nav>
            <div className="div1">
            <h1>{props.heading}</h1>
            </div>
        </>
    )
}

export default Navbar;

Navbar.prototype = {           // props types 
    heading: PropTypes.string
}

Navbar.defaultProps = {           // it will use this value if we do nat pass the value 
    heading: "HELLO"
}
