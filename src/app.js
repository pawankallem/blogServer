require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connect = require("./config/db");
const blogRoute = require("./routers/blog.route");

const PORT = process.env.PORT || 4001;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/posts", blogRoute);

app.listen(PORT, async () => {
  try {
    await connect();
    console.log(`Listening to PORT ${PORT} `);
  } catch (error) {
    console.log("error : ", error);
  }
});
