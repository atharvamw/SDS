import express from 'express'
import nodemailer from "nodemailer"
import dotenv from "dotenv"

import userRouter from './routes/user.js'
import projectRouter from './routes/project.js'
import teamRouter from './routes/team.js'
import projectReqRouter from './routes/projectRequest.js'
import contactRouter from './routes/contact.js'
import eventRouter from './routes/event.js'

import cors from 'cors'
import cookieParser from "cookie-parser"

const app = express()
app.use(express.json())
app.use(cookieParser())
dotenv.config();

app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).json({ error: "Invalid JSON payload" });
    }
    next();
});

app.get("/",(req,res)=>{
    res.send("<h1 style='color:red'>Thanks for Visiting! </h1>")
})

if (process.env.NODE_ENV === 'development') 
{
    app.use(cors({ origin: true, credentials: true }));
}
else
{   
    app.use(cors({

        origin: (origin, callback)=>{

            if(process.env.ALLOWED_ORIGINS.includes(origin))
            {
                callback(null, true)
            }
            else
            {
                callback(new Error("Request From this Origin is not allowed"))
            }
        },

        methods: ['GET', 'POST', 'OPTIONS'],
        credentials: true,
        allowedHeaders: ['Content-Type', 'Authorization'],
    }));
}

app.use(userRouter)
app.use(projectRouter)
app.use(teamRouter)
app.use(projectReqRouter)
app.use(eventRouter)
app.use("/api", contactRouter)

const PORT = process.env.PORT || 5000;

app.listen(5000, ()=>{
    console.log("Server Started at http://localhost:5000");
})