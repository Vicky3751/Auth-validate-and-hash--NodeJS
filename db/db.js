const mongoose = require("mongoose");

const connect = mongoose.connect(
  "mongodb+srv://Vicky:Vinayaka@cluster0.j480f.mongodb.net/nutrifyUpdate?retryWrites=true&w=majority"
);
module.exports = connect;
