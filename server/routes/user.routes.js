const express = require("express");
const router = express.Router()

router.post("login", (req, res) => {

    //req.body.key
    //rew.body.username
    //req.body.passowrd

    res.json({
        message: "i am sending this bakc to the browser"
    })
})


router.post("/signup", (req, res) => {

    res.json({
        message: "i am sending this bakc to the browser"
    })
})













module.exports = router