const express = require("express");
const app = express();
const PORT = 3001;
const connectDB = require("./Db/mongo");

// apni db require korchen thik e but seta k call koren nai jar jonno etokkho kaj hoyni
connectDB();

// 23 number line a etar answer ache
// const user = require("./Db/user");

const User = require("./Db/user");
const cors = require("cors");

// port listening
app.listen(PORT, () => {
  console.log("server running");
});
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("helloi");
});

app.use("/", async (req, res) => {
  // ekhane evabe destructure kora jay na jodio evabe hobe but eta k destructure bolena
  // let nam = req.body.nam;

  let { nam } = req.body;

  try {
    // ekhane dekhen apni new User likhcen but 'User' kintu kothao import ba require koren nai jeta korchen sheta holo 'user'
    var userdata = new User({
      name: nam,
    });

    const saveData = await userdata.save();

    if (saveData) {
      res.status(200).send("Data saved");
    }
  } catch (e) {
    res.status(400).send(e.message);
  }
});
