import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "../assets/Home.css";

function Home() {
    //variable and function to set variable

    const [data, setData] = useState([]);

    const axiosCall = () => {
        const options = {
            method: "GET",
            url: "/api/vinyls", //api/vinlys
        };

        axios
            .request(options)
            .then(function (response) {
                console.log("check", response.data.results);

                setData(response.data.results);
            })
            .catch(function (error) {
                console.error(error);
            });
    };

    //calls once on load
    useEffect(() => {
        axiosCall();
    }, []);

    //console.log(axiosCall);
    return (
        <>
            <main>
                <div className="home-container">
                    <div className="main-title">
                        <h2>Popular Vinyls</h2>
                    </div>
                    <div className="album-container">
                        {data.map((d, i) => {
                            if (i < 6) {
                                return (
                                    <div key={i} className="music-albums">
                                        <img
                                            src={d.cover_image}
                                            alt=""
                                            className="albumItems"
                                        />
                                        <div className="hover-items">
                                            <h3>View Vinyl {d.title}</h3>
                                            <div className="icons">
                                                <NavLink to="/display-vinyl">
                                                    <i className="fa-solid fa-music"></i>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>
                <div className="rightcontainer"></div>
            </main>
        </>
    );
}

export default Home;
