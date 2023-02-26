import React, { useState } from "react";
import "../styles/Navbar.css";
import { Link } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image';

import icon from '../images/icon.png';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

const Navbar = ({standard=false}) =>{
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    
    if(standard){
        return(
        <nav className="nav brand">
            <StaticImage src={icon} alt="logo"/>
            <p className="brand-name">hsf</p>
        </nav>
        );
    }
    return (
        <nav className="nav">
            <a href="/" className="brand">
                <StaticImage src={icon} alt="logo" />
                <p className="brand-name">hsf</p>
            </a>
            <button className="hamburger" onClick={() => { setIsNavExpanded(!isNavExpanded) }}><MoreHorizOutlinedIcon color="primary"/></button>
            <div className={ isNavExpanded ? "nav-menu expanded" : "nav-menu" }>
                <ul>
                    <li onClick={() => { setIsNavExpanded(!isNavExpanded) }}><Link to="/">Home</Link></li>
                    <li onClick={() => { setIsNavExpanded(!isNavExpanded) }}><Link to="/contribute">Contribute</Link></li>
                    <li onClick={() => { setIsNavExpanded(!isNavExpanded) }}><Link to="/projects">Projects</Link></li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;