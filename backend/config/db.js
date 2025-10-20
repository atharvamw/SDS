import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: String, 
    password: String
});

const User = mongoose.model("adminUser", userSchema);

let isConnected = false;

export const connectDB = async (uri) => {   
    if (isConnected) return;
    try {
        const database = await mongoose.connect(uri);
        console.log("Database Started: " + database.connection.host);
        isConnected = true;
    } catch (error) {
        console.error("Database Error: " + error.message);
        process.exit(1);
    }
};

export const findUser = async(targetUser) => {
    try {
        const user = await User.findOne({username: targetUser});
        return user ? user.password : null;
    } catch(e) {
        console.error(e);
    }
};

export const checkUserandPassword = async(targetUser, targetPassword) => {
    try {
        const user = await User.findOne({username: targetUser, password: targetPassword});
        return !!user;
    } catch(e) {
        console.error(e);
    }
};

export const createUser = async(username, password) => {
    const user = await User.findOne({username});
    if(user) {
        return {status: "error", message: "User Already Exists!"};
    } else {
        try {
            await User.create({ username, password });
            return {status: "success", message: "Admin User Created!"};
        } catch(err) {
            return {status: "error", message: err.toString()};
        }
    }
};

// ================== ADD THIS SECTION BELOW ==================

export const getAllProjects = async() => {
    try {
        // Use the Project model to find all documents ({})
        const projects = await Project.find({});
        return projects;
    } catch(e) {
        console.error("Error fetching projects: " + e.message);
        return []; // Return an empty array on error
    }
};

// Project Schema
const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String },
    image: { type: String }
});

// Export Project model
export const Project = mongoose.model("Project", projectSchema);

