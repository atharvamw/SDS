import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config();

export const userSchema = new mongoose.Schema({
    username: String, 
    password: String
})

export async function intializeUser(uri)
{
    try
    {
        const connection = await mongoose.createConnection(uri)
        const User = connection.model("adminUser", userSchema);
        return User
    }
    catch(err)
    {
        console.log(err)
    }
}

const User = await intializeUser(process.env.MONGO_URI)

export const findUser = async(targetUser) =>{
    try
    {
        const user = await User.findOne({username: targetUser})

        if(user)
        {
            return user.password
        }
        else
        {
            return null
        }
    }
    catch(e)
    {
        console.error(e);
    }
}

export const checkUserandPassword = async(targetUser, targetPassword) =>{
    try
    {
        const user = await User.findOne({username: targetUser, password: targetPassword})

        if(user)
        {
            return true
        }
        else
        {
            return false
        }
    }
    catch(e)
    {
        console.error(e);
    }
}

export const createUser = async(username, password) =>
{
    const user = await User.findOne({username: username})

    if(user)
    {
        return {status: "error", message: "User Already Exists!"}
    }
    else{
        try
        {
            await User.create({
                username: username,
                password: password
            })

            return {status: "success", message: "Admin User Created!"}
        }
        catch(err)
        {
            return {status: "error", message: err.toString()}
        }
    }
}

