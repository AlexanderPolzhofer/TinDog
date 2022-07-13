import React from "react";
import './navbar.styles.css';

const Navbar = () => {
    return (
        <nav
            className="navbar navbar-dark"
            id='navbar-container'>
            <a className="navbar-brand" href="#titleSection">tinDog</a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse"
                id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#footer">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#pricing">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#cta">Download</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;