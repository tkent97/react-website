import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../assets/VinylDisplay.css";

const VinylDisplay = () => {
    const [data, setData] = useState([]);
    const params = useParams("id");

    const axiosCall = () => {
        console.log("i got id from url", params.id);
        const options = {
            method: "GET",
            url: `/api/vinyls/${params.id}`,
        };
        const secondOptions = {
            method: "GET",
            url: `/api/vinyls/${params.id}/version`,
        };
        axios
            .request(options, secondOptions)
            .then(function (response) {
                console.log("i got data,", response.data);
                setData(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    };
    useEffect(() => {
        axiosCall();
    }, []);

    return (
        <>
            <main>
                <div className="vinyl-container">
                    <div className="left-container">
                        {data && data.images && data.artists && (
                            <div className="main-info">
                                <img
                                    src={data.images[0].resource_url}
                                    alt="vinyl img"
                                    className="cover-img"
                                />
                                <div className="info">
                                    <h1>
                                        {data.artists[0].name} - {data.title}
                                    </h1>
                                    <h4>Label: </h4>
                                    <h4>Format: </h4>
                                    <h4>Country: </h4>
                                    <h4>Released: </h4>
                                    <h4>Genre: </h4>
                                    <h4>Style: </h4>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="right-container">
                        <div className="release info">
                            <h3>Release</h3>
                            <hr></hr>
                        </div>
                        <div className="market-info">
                            <h3>Market info</h3>
                            <hr></hr>
                        </div>
                        <div className="community-stats">
                            <h3>Community Stats</h3>
                            <hr></hr>
                        </div>
                        <div className="favorites">
                            <h3>Add to favorites</h3>
                            <hr></hr>
                        </div>
                    </div>
                </div>
                <div className="bottom-container">
                    <h3>Tracklist</h3>
                </div>
            </main>
        </>
    );
};

export default VinylDisplay;
