import express from "express";
import userRouter from './app/Routes/userRoutes.js'
import deviceRouter from './app/Routes/DeviceRoutes.js'

const app = express();

app.use(express.json())

app.use('/users', userRouter)

app.use('/devices', deviceRouter)

app.listen(8000, () => {
    console.log("API draait nu!");
})