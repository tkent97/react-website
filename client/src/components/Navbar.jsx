import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../assets/Navbar.css";

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container container">
                    <Link to="/" className="navbar-logo">
                        Demand Beats <i className="fab fa-typo3" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? (
                            <i className="fa-solid fa-xmark"></i>
                        ) : (
                            <i className="fa-solid fa-bars"></i>
                        )}
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    "nav-links" + (isActive ? " activated" : "")
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    "nav-links" + (isActive ? " activated" : "")
                                }
                            >
                                <i className="fa-solid fa-user"></i>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    "nav-links" + (isActive ? " activated" : "")
                                }
                            >
                                <i className="fa-solid fa-bookmark"></i>
                            </NavLink>
                        </li>
                        <NavLink to="/login" className="login">
                            Login
                        </NavLink>
                        |
                        <NavLink to="/signup" className="login">
                            Sign Up
                        </NavLink>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;
