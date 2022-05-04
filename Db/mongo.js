const mongoose = require("mongoose");
const url =
  // apni ekhaneo problem korchen cluster0 er jaygay apni user dichen
  "mongodb+srv://sarowar:sarowar@cluster0.frhfs.mongodb.net/Cluster0?retryWrites=true&w=majority";
const connectDB = () => {
  mongoose
    .connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("Db connect");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDB;
