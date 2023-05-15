const express = require("express");
const router = express.Router()
//const User = require("./models/User")

router.post("login", async (req, res) => {

    try {
        /*
        const targetUser = await User.find({
            id: req.body.id
        });

        if(password = target.password){
            //login sucess
            res.json({
                data:{
                    user:targetUser
                }
            })
        } else{
            res.json(
                message: "user not found"
            )

        }
        */
        res.json({
            message: "Success Got all",
            data: results,
        });
    } catch (err) {
        console.log(err);
        res.json({
            message: err,
        });
    }

    //req.body.key
    //rew.body.username
    //req.body.passowrd

    res.json({
        message: "i am sending this bakc to the browser"
    })
})


router.post("/signup", (req, res) => {
    /**
     * User.create()
     * User.update()
     * User.destroy()
     * User.find()
     * 
     * 
     */
    res.json({
        message: "i am sending this bakc to the browser"
    })
})

function something() {
    axios(options).then((response) => {
        //do somethi
        console.log(response.data)
    })
}

async function something() {
    const response = await axios(options);
    console.log(response.data)

}













module.exports = router