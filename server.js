const express = require("express");
const app = express()
const userRoute = require("./routes/users");
PORT = 3000

app.use("/api/users",userRoute);
app.listen(PORT,() => console.log("servier is up"));