const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000
const app = express();
dotenv.config()
app.use(express.json());
const cors = require("cors");
app.use(cors());

const route = require("./routes/route.js")
app.use("/public",express.static("public"))
app.use("/instaclone/v1",route)

mongoose.set('strictQuery', false)

mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true , useUnifiedTopology: true},
    ()=>{
    console.log('DB CONNECTED');
})
// mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
//     console.log('connected to DB')
// })

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})

