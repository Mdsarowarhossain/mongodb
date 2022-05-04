const mongoose = require("mongoose");
const user = new mongo.Schema({
    name:{
        type : string
    }
})
const User = new mongoose.model("user",user);
module.exports = User ;