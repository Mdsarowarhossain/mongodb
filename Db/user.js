const mongoose = require("mongoose");
const user = new mongoose.Schema({
    name:{
        type :String
    }
})
const User = mongoose.model("User",user);
module.exports = User ;