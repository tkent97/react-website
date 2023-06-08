const express = require('express');
const router = express.Router()
const axios = require('axios');


require('dotenv').config();


router.get('/vinyls/popular', (req, res) => {


    // const currentTime = Date.now();

    // const diff = 1681386121946;
    // const newTime = currentTime - diff;

    // console.log("check time", currentTime);
    // console.log("oauthtime", 1683068758);
    // console.log("math", currentTime - 1683068758)

    // console.log("newtime", newTime, 1683068758)
    // const time = Math.floor(Date.now() / 1000).toString

    const options = {
        method: "GET",
        url: "https://api.discogs.com/database/search?sort=have&type=release&format_exact=Vinyl&page=1", //api/vinlys
        headers: {
            Authorization:
                `OAuth oauth_consumer_key="${process.env.OAUTH_CONSUMER_KEY}", oauth_nonce="${process.env.OAUTH_NONCE}", oauth_signature="${process.env.OAUTH_SIGNATURE}", oauth_signature_method="PLAINTEXT", oauth_timestamp="${process.env.OAUTH_TIMESTAMP}", oauth_token="${process.env.OAUTH_TOKEN}", oauth_version="1.0"`
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


router.get('/vinyls/:id', async (req, res) => {
    console.log("i got id", req.params.id)


    const options = {
        method: "GET",
        url: `https://api.discogs.com/masters/${req.params.id}`,//api/vinlys
        headers: {
            Authorization:
                `OAuth oauth_consumer_key="${process.env.OAUTH_CONSUMER_KEY}", oauth_nonce="${process.env.OAUTH_NONCE}", oauth_signature="${process.env.OAUTH_SIGNATURE}", oauth_signature_method="PLAINTEXT", oauth_timestamp="${process.env.OAUTH_TIMESTAMP}", oauth_token="${process.env.OAUTH_TOKEN}", oauth_version="1.0"`
        },
    };


    axios
        .request(options)
        .then(function (response) {
            //console.log("i got vinlys/id data", response.data);
            console.log("sending back")
            res.json(response.data)


        })
        .catch(function (error) {
            console.error(error);
        });


});
router.get('/vinyls/:id/version', (req, res) => {
    console.log("i got id from version", req.params.id)


    const options = {
        method: "GET",
        url: `https://api.discogs.com/masters/${req.params.id}/versions`,//api/vinlys
        headers: {
            Authorization:
                `OAuth oauth_consumer_key="${process.env.OAUTH_CONSUMER_KEY}", oauth_nonce="${process.env.OAUTH_NONCE}", oauth_signature="${process.env.OAUTH_SIGNATURE}", oauth_signature_method="PLAINTEXT", oauth_timestamp="${process.env.OAUTH_TIMESTAMP}", oauth_token="${process.env.OAUTH_TOKEN}", oauth_version="1.0"`
        },
    };


    axios
        .request(options)
        .then(function (response) {
            //console.log("i got vinlys/id data", response.data);
            console.log("sending back from version")
            res.json(response.data)


        })
        .catch(function (error) {
            console.error(error);
        });


});















module.exports = router