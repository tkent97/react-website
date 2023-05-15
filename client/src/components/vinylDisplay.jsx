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
    console.log(axiosCall);
    return (
        <div>
            <main>
                <div className="container">
                    {data && (
                        <div>
                            <h3>View Vinyl {data.title}</h3>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default VinylDisplay;
