const express = require("express");
const router = express.Router()
const axios = require('axios');
require('dotenv').config();



router.get('/vinyls', (req, res) => {


    // const currentTime = Date.now();

    // const diff = 1681386121946;
    // const newTime = currentTime - diff;

    // console.log("check time", currentTime);
    // console.log("oauthtime", 1683068758);
    // console.log("math", currentTime - 1683068758)

    // console.log("newtime", newTime, 1683068758)


    const options = {
        method: "GET",
        url: "https://api.discogs.com/database/search?page=200&per_page=6", //api/vinlys
        headers: {
            Authorization:
                `OAuth oauth_consumer_key="${process.env.OAUTH_CONSUMER_KEY}", oauth_nonce="${process.env.OAUTH_NONCE}", oauth_signature="${process.env.OAUTH_SIGNATURE}", oauth_signature_method="PLAINTEXT", oauth_timestamp="${process.env.OAUTH_TIMESTAMP}", oauth_token="${process.env.OAUTH_TOKEN}", oauth_version="1.0"'`
        },
    };



    axios
        .request(options)
        .then(function (response) {
            console.log(response.data);

            res.json(response.data)


        })
        .catch(function (error) {
            console.error(error);
        });



})

router.get('/vinyls/:id', (req, res) => {

    console.log("i got id", req.params.id);


    res.json({
        message: "success"
    })


});











module.exports = router