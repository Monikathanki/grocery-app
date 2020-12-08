import React, { useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown"





function Navbar() {
    let [click, setClick] = useState(false);
    let [dropdown, setDropdown] = useState(false);

    let handleClick = () => setClick(!click)
    let closeMobileMenu = () => setClick(false);

    

    let onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    let onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);

        } else {
            setDropdown(false);
        }
    };

    return (
        <>
            <nav className="navbar">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    Stock Up Grocery app

                    <i className="fab-fa-firstdraft" />
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link
                            to="/"
                            className="nav-links"
                            onClick={closeMobileMenu}>Home
                        </ Link>
                    </li>
                    <li
                        className="nav-item"
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <Link
                            to="/products"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        
                        >
                            Products <i className="fas fa-caret-down" />
                        </Link>
                        {dropdown && <Dropdown />}

                    </li>
                    <li className="nav-item">
                        <Link
                            to="/contact-us"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        > Contact US
                    </Link>

                    </li>
                    <li className="nav-item">
                        <Link
                            to="/checkout"
                            className="nav-links"
                            onClick={closeMobileMenu}
                        >Checkout
                        </Link>

                    </li>
                    
                    <li>
                        <Link
                            to='/sign-up'
                            className='nav-links-mobile'
                            onClick={closeMobileMenu}
                        > Sign Up
                            
                         </Link>
                        
                    </li>
                    
                </ul>
                <Button />
            </nav>
        </>
    );
}


export default Navbar;
