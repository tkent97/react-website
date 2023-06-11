import { Link } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../assets/Navbar.css";
import axios from "axios";

function Navbar({ showHelper, setShowHelper }) {
    const [click, setClick] = useState(false);
    const [searchHelper, setSearchHelper] = useState([]);

    const [input, setInput] = useState("");
    const handleClick = () => setClick(!click);
    const navigate = useNavigate();

    const fetchVinlys = async () => {
        const options = {
            method: "GET",
            url: "/api/vinyls/popular", //api/vinlys
        };

        axios
            .request(options)
            .then(function (response) {
                console.log("search-", response.data.results[0]);
                let tempResult = [];
                response.data.results.map((r) => {
                    if (r.title.includes(input)) {
                        tempResult.push(r);
                    }
                });

                setSearchHelper([...tempResult]);
            })
            .catch(function (error) {
                console.error(error);
            });
    };

    const searchHandler = (e) => {
        fetchVinlys();
        setInput(e.target.value);
        setShowHelper(true);
    };

    console.log("searchHelper", searchHelper);

    return (
        <div onClick={() => setShowHelper(false)}>
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
                    <div className="search-cont">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input
                            className="nav-search"
                            placeholder="Search"
                            value={input}
                            onChange={searchHandler}
                        />
                        <div className="searchHelper">
                            {showHelper &&
                                searchHelper.map((d, i) => {
                                    return (
                                        <a
                                            key={"d" + i}
                                            onClick={() =>
                                                navigate(
                                                    `/display-vinyl/${d.master_id}`
                                                )
                                            }
                                            href="#"
                                        >
                                            {d.title}
                                        </a>
                                    );
                                })}
                        </div>
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
