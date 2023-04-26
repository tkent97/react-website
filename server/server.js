const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000;
const axios = require('axios');
require('dotenv').config();

app.get('/api/vinyls', (req, res) => {


    const currentTime = Date.now();
    console.log("check time", currentTime);


    const options = {
        method: "GET",
        url: "https://api.discogs.com/database/search", //api/vinlys
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



app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));
app.listen(PORT, () => console.log(`server up on port:${PORT}`))

