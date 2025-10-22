import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config();

export const connectDB = async (uri) =>
{   
        try
        {
            const connection = await mongoose.createConnection(uri)
            connection.on('connected', () => {
                console.log("Database Connected: " + connection.db.databaseName);
            });
            return connection
        }
        catch(error)
        {
            console.error("Database Error: " + error.message);
            process.exit(1);
        }
}
    
const userDB = await connectDB(process.env.MONGO_URI);
const projectDB = await connectDB(process.env.MONGO_URI_PROJECT);

const userSchema = new mongoose.Schema({
    username: String, 
    password: String
})

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String },
    image: { type: String }
});

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  designation: { type: String, required: true }
});

const User = userDB.model("adminUser", userSchema);
const Project = projectDB.model("Sd", projectSchema);
const Team = mongoose.model("Team", teamSchema);


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

export const getProjects = async()=>{

    try
    {
        const resultData = Project.find({});
        return resultData
    }
    catch(error){
        console.log(error)
    }
}

export async function addProject(projectObj)
{
    try
    {
        if(projectObj.title && projectObj.description)
        {
            if(Project.findOne({title: projectObj.title}))
            {
                return {"status": "failed", "message": "Project Title Already Exists"}
            }
            else
            {
                const newProj = await Project.create({
                    title: projectObj.title,
                    description: projectObj.description,
                    category: projectObj.category,
                    image: projectObj.image
                })
                console.log(newProj)
                return {"status": "success"}
            }
        }
        else
        {
            return {"status": "failed", "message": "Please Enter all required fields"}
        }

    }
    catch(err)
    {
        console.error(err)
    }
}


// Fetch all team members
export const getTeam = async () => {
  try {
    const members = await Team.find({});
    return members;
  } catch (e) {
    console.error("Error fetching team data: " + e.message);
    return [];
  }
};
