import mongoose from "mongoose";

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
