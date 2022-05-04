const mongoose = require("mongoose");
const url = `mongodb+srv://sarowar:sarowar@cluster0.frhfs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const connectDB = async ()=>{
    await mongoose.connect(url,{useUnifiedTopology: true,useNewUrlParser: true});
};
console.log("Db connect")
module.exports = connectDB;
