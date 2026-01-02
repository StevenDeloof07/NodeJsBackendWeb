import express from "express";
import userRouter from './app/Routes/userRoutes.js'
import deviceRouter from './app/Routes/DeviceRoutes.js'

import fs from "fs"

const app = express();

app.use(express.json())

//Logic for sending the file correctly taken from
//https://stackoverflow.com/questions/20345936/nodejs-send-html-file-to-client
app.get('/', (req, res) => {
    res.sendFile('root.html', {root: "./app/Views"})
})

app.use('/users', userRouter)

app.use('/devices', deviceRouter)

app.listen(8000, () => {
    console.log("API draait nu!");
})