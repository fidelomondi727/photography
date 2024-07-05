import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href="/">My<span>photography</span></a>
            </div>
            <ul className="navbar-link">
                <li><Link to="/">Home</Link></li>
                <li><Link to="about">About</Link></li>
                <li><Link to="gallery">Gallery</Link></li>
                <li><Link to="services">Services</Link></li>
                <li><Link to="contact">Contact</Link></li>
                <li><Link to="footer">Footer</Link></li>
            </ul>
        </nav>
    )
}
export default Navbar;