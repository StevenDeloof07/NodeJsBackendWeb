import express from "express";
import bodyParser from "body-parser";
import router from './app/routes.js'

const app = express();

app.use(express.json())

app.use('/', router)

app.listen(8000, () => {
    console.log("API draait nu!");
})