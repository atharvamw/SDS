import express from 'express'
import dotenv from "dotenv"
import {connectDB, findUser} from "./config/db.js"
import cors from 'cors'
import jwt from 'jsonwebtoken'

const app = express();
app.use(express.json())
dotenv.config();

app.get("/",(req,res)=>{
    res.send("<h1 style='color:red'>Thanks for Visiting! </h1>")
})

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));

app.post("/authUser",async (req,res)=>{

    const data = req.body;
    console.log(req.body)

    try {
        const status = await findUser(data.username);

        if (status) {
            const token = jwt.sign({"user": data.username}, "@secret-key", {expiresIn:"30d"})

            res.cookie("token", token, {
                httpOnly: true,
                maxAge: 1000 * 60 * 60 * 24 * 30,
                secure: false,
                sameSite: 'strict'
            })

            res.json({status: "success"});
        } else {
            res.json({status: "error"});
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ "error": "Internal Server Error" });
    }
    
})

app.listen(5000, ()=>{
    console.log("Server Started at http://localhost:5000");
    connectDB(process.env.MONGO_URI);
})
