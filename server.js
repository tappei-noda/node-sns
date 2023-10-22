const express = require("express");
const app = express()
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postsRoute = require("./routes/posts");
const mongoose = require("mongoose");
require("dotenv").config();
PORT = 3000

mongoose.connect(process.env.MONGOURL).then(() =>{
    console.log("connect . . . ")
});

app.use(express.json());
app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/posts",postsRoute);
app.listen(PORT,() => console.log("servier is up"));