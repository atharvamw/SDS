
import { useContext } from "react"
import { AuthContext } from "../context/Auth"

export default function LoginPage(props)
{   
    const Auth = useContext(AuthContext);

    async function handleLogin(formData)
    {   
        console.log("Form Data Entries:", Array.from(formData.entries()));
        const username = formData.get("username");
        const password = formData.get("password");

        if(Auth.userAuth.user == null)
        {
            await Auth.login(username,password);
        }
        else
            console.log("Already Logged In!")
    }

    async function handleLogout(event)
    {
        if(Auth.userAuth.user != null)
        {
            await Auth.logout();
        }
        else
            console.log("Already Logged Out!")
    }

    return (
        <form action={handleLogin} className="flex flex-col items-center my-10">  
            <h1 className="text-center mb-10">Admin Login</h1>
            <input type="text" name="username" className="text-xl m-5 p-2 bg-blue-200 text-black rounded-xl w-100" placeholder="Username"/>
            <input type="password" name="password" className="text-xl m-5 p-2 bg-blue-200 text-black rounded-xl w-100" placeholder="Password"/>
            <button type="submit" className="text-2xl bg-blue-700 rounded-xl m-3 p-2 cursor-pointer w-100">Login</button>
            <button type="button" className="text-2xl bg-blue-700 rounded-xl m-3 p-2 cursor-pointer w-100" onClick={handleLogout}>Log Out</button>
        </form>

    )
}

