import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const VinylDisplay = () => {
    const [data, setData] = useState([]);
    const params = useParams("id");

    const axiosCall = () => {
        console.log("i got id from url", params.id);
        const options = {
            method: "GET",
            url: `/api/vinyls/${params.id}`,
        };
        axios
            .request(options)
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
        <div>
            <main>
                <div className="vinyl-container">
                    <div className="left-container">
                        {data && (
                            <div>
                                <img
                                    src={data.images[0].resource_url}
                                    alt="vinyl img"
                                    className="cover-img"
                                />
                                <h3>{data.title}</h3>
                            </div>
                        )}
                    </div>
                    <div className="right-container"></div>
                </div>
            </main>
        </div>
    );
};

export default VinylDisplay;
