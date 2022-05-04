const express = require("express");
const app = express();
const PORT = 3000;
const mongodb = require("./Db/mongo");
const user = require("./Db/user");
const cors = require("cors");
app.listen(PORT,()=>{
    console.log("server running")
});
app.use(cors());
app.use(express.json());
/*app.use("/",(req,res)=>{
    res.sendFile(__dirname +"/views/index.html")
});*/
app.post("/register",async (req,res)=>{

let nam = req.body.nam;
try {
    var userdata = await new User({
       name:nam
    });
 userdata.save().then(item => {
      res.send("item saved to database");
    })
} catch (e) {
    res.status(402).send(e)
    
}
})