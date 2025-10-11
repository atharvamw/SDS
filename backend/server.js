import express from 'express'
import dotenv from "dotenv"
import {connectDB} from "./config/db.js"

const app = express();
dotenv.config();

// Write code to handle a get request at endpoint /hello that will display anything in red color on the html page.

app.get("/",(req,res)=>{
    res.send("<h1 style='color:red'>Thanks for Visiting! </h1>")
})



app.listen(5000, ()=>{
    console.log("Server Started at http://localhost:5000");
    connectDB(process.env.MONGO_URI);
})
