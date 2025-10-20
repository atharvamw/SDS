import express from 'express'
import dotenv from "dotenv"
// require('dotenv').config();
import {connectDB, createUser, findUser} from "./config/db.js"
import cors from 'cors'
import jwt from 'jsonwebtoken'
import cookieParser from "cookie-parser"
import bcrypt from 'bcrypt'


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

const saltRounds = 10;

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

app.get("/getProjects", async (req, res) => {
    try {
        // Ensure the correct DB is connected (using the project URI as in your listen block)
        await connectDB(process.env.MONGO_URI_PROJECT); 
        
        // Fetch all projects using the function from db.js
        const projects = await getAllProjects();

        // Send the data to the client
        res.status(200).json({ 
            status: "success",
            projects: projects 
        });

    } catch (error) {
        console.error('Error in /get route:', error);
        // Fallback for internal server errors
        res.status(500).json({ status: "error", message: "Failed to retrieve projects." });
    }
});

app.post("/login",async (req,res)=>{
    await connectDB(process.env.MONGO_URI);
    const data = req.body;

    try {
        const hashedPassword = await findUser(data.username);

        if (hashedPassword && await bcrypt.compare(data.password, hashedPassword)) {

            const token = jwt.sign({"user": data.username}, process.env.JWT_SECRET, {expiresIn:"30d"})

            res.cookie("token", token, {
                httpOnly: true,
                maxAge: 1000 * 60 * 60 * 24 * 30,
                secure: true,
                sameSite: 'strict'
            })
            
            res.json({status: "success", username: data.username});
        } else {
            res.json({status: "failed", username: data.username, message: "Invalid Credentials"});
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ "error": "Internal Server Error" });
    }
    
})

app.get("/auth", async (req,res)=>{
    await connectDB(process.env.MONGO_URI);
    if(req.cookies.token)
    {
        const user = jwt.verify(req.cookies.token,process.env.JWT_SECRET)

        if(user)
            res.json({"authentication": "success", "user": user});
        else
            res.json({"authentication": "failed"});
    }
    else
    {
        res.json({"authentication": "failed", "message":"please login first"});
    }
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
            secure: true
        })
    
        res.json({"status": "Successfully Logged Out!"})
    }

})

app.post("/register", async (req, res)=>{
    await connectDB(process.env.MONGO_URI);
    const data = req.body

    if(!data.username || !data.password || data.adminReferCode !== process.env.ADMIN_REFER_CODE)
    {
        res.json({
            status: "failed",
            message: `Please Enter: ${!data.username? "Username, " : ""}${!data.password? "Password, " : ""}${data.adminReferCode !== process.env.ADMIN_REFER_CODE? "Valid Admin_Refer_Code" : ""}`
        })
    }
    else
    {
        const hashedPassword = await bcrypt.hash(data.password, saltRounds)

        const status = await createUser(data.username, hashedPassword)
        res.json(status)
    }
    
})

// app.listen(5000, ()=>{
//     console.log("Server Started at http://localhost:5000");
//     connectDB(process.env.MONGO_URI);
// })

app.listen(5000, ()=>{
    console.log("Server Started at http://localhost:5000");
    connectDB(process.env.MONGO_URI_PROJECT);
})
