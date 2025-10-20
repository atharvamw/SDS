
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/Auth"
import { useNavigate } from "react-router-dom";

export default function LoginPage(props)
{   
    const Auth = useContext(AuthContext);
    const navigate = useNavigate();

    async function handleLogin(formData)
    {   
        console.log("Form Data Entries:", Array.from(formData.entries()));
        const username = formData.get("username");
        const password = formData.get("password");

        if(Auth.userAuth.user === null)
        {
            const result = await Auth.login(username,password);
            navigate("/home")
        }
        else
            console.log("Already Logged In!")
            navigate("/home")
    }

    return (
        <form action={handleLogin} className="flex flex-col items-center my-10">  
            <h1 className="text-center mb-10 text-blue-700 font-bold">Admin Login</h1>
            <input type="text" name="username" className="text-xl m-5 p-2 bg-blue-200 text-black rounded-xl w-100" placeholder="Username"/>
            <input type="password" name="password" className="text-xl m-5 p-2 bg-blue-200 text-black rounded-xl w-100" placeholder="Password"/>
            <button type="submit" className="text-2xl bg-blue-700 rounded-xl m-3 p-2 cursor-pointer w-100">Login</button>
            {Auth.userAuth.user!=null ? <p className="bg-green-500 rounded-xl p-2 m-4 text-center text-shadow-lg">Logged in sucessfully!</p> : null}
        </form>

    )
}

