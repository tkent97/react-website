const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000;
require('dotenv').config();

const vinylrouter = require("./routes/vinyl.routes")
const userrouter = require("./routes/user.routes")




app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));



app.use("/api", vinylrouter)
app.use("/api", userrouter)



app.listen(PORT, () => console.log(`server up on port:${PORT}`))

//sass -v
//sass --watch client/src/assets/styles.scss client/src/assets/style.css
//sass --watch client/src/assets/home.scss client/src/assets/home.css 
