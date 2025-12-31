import express from "express";
import userRouter from './app/Routes/userRoutes.js'

const app = express();

app.use(express.json())

app.use('/users', userRouter)

app.listen(8000, () => {
    console.log("API draait nu!");
})