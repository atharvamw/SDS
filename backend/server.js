import express from 'express'
import dotenv from "dotenv"
import {connectDB, findUser} from "./config/db.js"
import cors from 'cors'
import jwt from 'jsonwebtoken'
import cookieParser from "cookie-parser"

const app = express();
app.use(express.json())
app.use(cookieParser())
dotenv.config();

app.get("/",(req,res)=>{
    res.send("<h1 style='color:red'>Thanks for Visiting! </h1>")
})

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'OPTIONS'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));

app.post("/login",async (req,res)=>{

    const data = req.body;
    console.log(req.body)

    try {
        const status = await findUser(data.username);

        if (status) {
            const token = jwt.sign({"user": data.username}, process.env.JWT_SECRET, {expiresIn:"30d"})

            res.cookie("token", token, {
                httpOnly: true,
                maxAge: 1000 * 60 * 60 * 24 * 30,
                secure: false,
                sameSite: 'strict'
            })

            res.json({status: "success", username: data.username, password: data.password});
        } else {
            res.json({status: "error"});
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ "error": "Internal Server Error" });
    }
    
})

app.get("/auth", async (req,res)=>{

    const user = jwt.verify(req.cookies.token,process.env.JWT_SECRET)

    if(user)
        res.json({"authentication": "success", "user": user});
    else
        res.json({"authentication": "failed"});
})

app.post("/logout", async (req, res)=>{

    if(!req.cookies.token)
    {
        res.json({"status": "Already Logged Out!"})
    }
    else
    {
        res.cookie("token", "", {
            httpOnly: true,
            expires: new Date(0),
            samesite: "strict",
            secure: false
        })
    
        res.json({"status": "Successfully Logged Out!"})
    }


})

app.listen(5000, ()=>{
    console.log("Server Started at http://localhost:5000");
    connectDB(process.env.MONGO_URI);
})
