import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/Home.css";

function Home() {
    return (
        <>
            <main>
                <div className="home-container">
                    <div className="main-title">
                        <h2>Popular Vinyls</h2>
                    </div>
                    <div className="album-container">
                        <div className="music-albums">
                            <img src="" alt="" className="albumItems" />
                            <div className="hover-items">
                                <h3>View Vinyl</h3>
                                <div className="icons">
                                    <NavLink to="/display-vinyl">
                                        <i className="fa-solid fa-music"></i>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="music-albums">
                            <img src="" alt="" className="albumItems" />
                            <div className="hover-items">
                                <h3>View Vinyl</h3>
                                <div className="icons">
                                    <NavLink to="/display-vinyl">
                                        <i className="fa-solid fa-music"></i>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="music-albums">
                            <img src="" alt="" className="albumItems" />
                            <div className="hover-items">
                                <h3>View Vinyl</h3>
                                <div className="icons">
                                    <NavLink to="/display-vinyl">
                                        <i className="fa-solid fa-music"></i>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightcontainer"></div>
            </main>
        </>
    );
}

export default Home;
