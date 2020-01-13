const express = require("express");
const connectDb = require("./config/db");

const app = express();

// connect to mongo
connectDb();

app.get("/", (req, res) => res.send(`api running`));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
