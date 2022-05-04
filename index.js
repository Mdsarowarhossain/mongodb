const express = require("express");
const app = express();
const PORT = 3000;
const User = require("./Db/mongo");

app.listen(PORT,()=>{
    console.log("server running")
});

app.use("/",(req,res)=>{
    res.sendFile(__dirname +"/views/index.html")
});
app.post("/register",(req,res)=>{


try {
    var userdata = new User({
        name:req.body.name
    });
 userdata.save().then(item => {
      res.send("item saved to database");
    })
} catch (e) {
    res.status(400).send(e)
    
}
})