const mongoose = require("mongoose");

module.exports.connectDB = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/yessineCD", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connected to DB");
    })
    .catch((e) => {
      console.log(e.message);
      process.exit(1);
    });
};
