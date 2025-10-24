import {createUser, findUser} from "../models/user.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export async function handleLogin(req,res)
{
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
    } 
    catch (error) 
    {
        console.log(error)
        res.status(500).json({ "error": "Internal Server Error" });
    }
}

export async function handleAuth(req,res)
{
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
}

export async function handleLogout (req, res)
{
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
}

export async function handleRegister (req, res)
{
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
}