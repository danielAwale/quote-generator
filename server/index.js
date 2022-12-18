const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

app.get("/quotes", async (res, req) => {
    try {
        const allQuotes = await pool.query("SELECT * FROM quotes");
        res = allQuotes.rows
        console.log(res);
    } catch (err) {
        console.log(err.message);
    }
})

app.listen(5000, () => {
    console.log("server has started on port 5000");
})
