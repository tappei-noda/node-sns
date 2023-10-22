const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        min: 3,
        max: 25,
        unique: true,
    },
    email:{
        type:String,
    },
});

module.exports = mongoose.model("User",UserSchema);