import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: String, 
    password: String
})

const User = mongoose.model("adminUser", userSchema);

const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    category: String,
    image: String
})

const Project = mongoose.model("Sds Pr")

let isConnected = false;

export const connectDB = async (uri) =>
{   
    if (isConnected) return;
    try
    {
        const database = await mongoose.connect(uri);
        console.log("Database Started: " + database.connection.host);
    }
    catch(error)
    {
        console.error("Database Error: " + error.message);
        process.exit(1);
    }
}

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
