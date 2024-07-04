import React from "react";
import "./Navigation.css";
import { Outlet, Link } from "react-router-dom";
const Navigation =() =>{
  return (
    <nav id="Navigation">
        <div className="Navigation-logo">
            <a href="/">Photograph<span>website</span></a>
        </div>
        <ul className="Navigation-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="about">About</Link></li>
            <li><Link to="gallery">Gallery</Link></li>
            <li><Link to="service">Service</Link></li>
            <li><Link to="contact">Contact</Link></li>
        </ul>
        <Outlet />
    </nav>
  ); 
}

export default Navigation;