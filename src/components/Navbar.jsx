import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        TRVL <i className="fab fa-typo3" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? (
                            <i class="fa-solid fa-xmark"></i>
                        ) : (
                            <i class="fa-solid fa-bars"></i>
                        )}
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="home">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    "nav-links" + (isActive ? " activated" : "")
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="profile">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    "nav-links" + (isActive ? " activated" : "")
                                }
                            >
                                <i class="fa-solid fa-user"></i>
                            </NavLink>
                        </li>
                        <li className="favorites">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    "nav-links" + (isActive ? " activated" : "")
                                }
                            >
                                <i class="fa-solid fa-bookmark"></i>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;
