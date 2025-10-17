import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: String, 
    email: String
})

const User = mongoose.model("User", userSchema);

export const findUser = async(targetUser) =>{
    try
    {
        const user = await User.findOne({username: targetUser})

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

export const connectDB = async (uri) =>
{
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
