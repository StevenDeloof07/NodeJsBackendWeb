import express from "express";
import db from "./database/connection.js"

const app = express();

app.get('/users', (req, res) => {
    const select = db.prepare('SELECT * FROM users');
    res.json(select.all());
})

app.listen(8000, () => {
    const select = db.prepare('SELECT * FROM users');
    console.log("API draait nu!");
})