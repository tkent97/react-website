import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/Home.css";

const Home = (props) => {
    return (
        <>
            <main>
                <div className="home-container">
                    <div className="main-title">
                        <h2>Popular Vinyls</h2>
                    </div>
                    <div className="albumHolder">
                        <div class="image" className="musicAlbums">
                            <img src="" alt="" className="albumItems" />
                            <div class="hover-items">
                                <h3>View Vinyl</h3>
                                <div class="icons">
                                    <NavLink to="/display-vinyl">
                                        <i class="fa-solid fa-music"></i>
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
};

export default Home;
