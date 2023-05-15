import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import "../assets/Home.css";
import albumFPO from "../assets/placeholder.jpg";

const Home = () => {
    //variable and function to set variable

    const [data, setData] = useState([]);
    const navigate = useNavigate();

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
    //id: 1354 //artist
    //master_id 1893
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
                            // if (i < 6) {
                            let coverImage;
                            if (
                                d.cover_image ==
                                "https://st.discogs.com/94e4ea25bd35138659d6c659571233819223816b/images/spacer.gif"
                            ) {
                                coverImage = albumFPO;
                            } else {
                                coverImage = d.cover_image;
                            }

                            console.log("album data:", d);

                            return (
                                <div
                                    key={i}
                                    className="music-albums"
                                    onClick={() =>
                                        navigate(
                                            `/display-vinyl/${d.master_id}`
                                        )
                                    }
                                >
                                    <img
                                        src={coverImage}
                                        alt=""
                                        className="album-items"
                                    />
                                    <div className="hover-items">
                                        <h3>View Vinyl {d.title}</h3>
                                        <div className="icons">
                                            <i className="fa-solid fa-music"></i>
                                        </div>
                                    </div>
                                </div>
                            );
                            // }
                        })}
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;
