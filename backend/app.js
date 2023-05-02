const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(express.json());

/* db Connection */
const conn = require("./db/conn");
conn()

app.listen(9999, () => {
    console.log("server is running...");
});

