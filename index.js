const express = require("express");
const app = express();
const connect = require("./db/db");
const cookieParser = require("cookie-parser");
app.use(express.json());
app.use(cookieParser());
app.use("/", require("./routes/route"));

connect
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running");
    });
  })
  .catch((err) => {
    console.log(err);
  });
