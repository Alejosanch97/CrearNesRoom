import React, { useState } from 'react';
import "../../styles/Navbar.css";

export const Navbar = () => {
    // State to manage which link is currently active
    const [activeLink, setActiveLink] = useState('Home');
    // State to manage the visibility of the mobile menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to handle link clicks and update the active link state
    const handleLinkClick = (linkName) => {
        setActiveLink(linkName);
        setIsMenuOpen(false); // Close the menu after clicking a link (for mobile)
    };

    // Function to toggle the mobile menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="container">
                {/* Brand/Logo */}
                <a href="#home" className="navbar-brand" onClick={() => handleLinkClick('Home')}>
                    School News
                </a>

                {/* Hamburger menu icon for mobile */}
                <button className="hamburger" onClick={toggleMenu} aria-label="Toggle navigation menu">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                {/* Navigation links */}
                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <li>
                        <a
                            href="#home"
                            className={activeLink === 'Home' ? 'active-link' : ''}
                            onClick={() => handleLinkClick('Home')}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className={activeLink === 'Contact' ? 'active-link' : ''}
                            onClick={() => handleLinkClick('Contact')}
                        >
                            Contact
                        </a>
                    </li>
                    <li>
                        <a
                            href="#manage-articles"
                            className={activeLink === 'Manage Articles' ? 'active-link' : ''}
                            onClick={() => handleLinkClick('Manage Articles')}
                        >
                            Manage Articles
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

// Default export for the component to be used in other files
export default Navbar;

