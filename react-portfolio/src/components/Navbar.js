import { Link } from 'react-router-dom';
import React from 'react';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">React Portfolio</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                        <Link 
                            to="/about"
                            className={
                                window.location.pathname === `/about`
                                    ? `nav-link active`
                                    : `nav-link`
                            }
                        >
                            About
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link 
                            to="/portfolio"
                            className={
                                window.location.pathname === `/portfolio`
                                    ? `nav-link active`
                                    : `nav-link`
                            }
                        >
                            Portfolio
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link 
                            to="/contact"
                            className={
                                window.location.pathname === `/contact`
                                    ? `nav-link active`
                                    : `nav-link`
                            }
                        >
                            Contact
                        </Link>
                        </li>
                    </ul>
                </div>
        </nav>
    );
}

export default Navbar;