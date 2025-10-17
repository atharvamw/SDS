import { createContext, useState } from "react";

export const AuthContext = createContext(null)

export function AuthProvider(props)
{
    const [userAuth, setUserAuth] = useState(null)
    const [loggedIn, setLoggedIn] = useState(false)

    const login = async (user) => {
        const result = await fetch("http://localhost:5000/authUser", {
            credentials: "include"
            method: 'Post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: user,
            })
        })

    const data = await result.json();
    
    if(data.user && !data.error)
    {
        setUserAuth({"user": data.user})
        setLoggedIn(true)
        return true
    }
    else
        return false
    }

    function logout()
    {
        if(loggedIn === "false" && userAuth == null)
        {
            return true
        }
        else
        {
            setUserAuth(null)
            setLoggedIn(false)
            return true
        }
    }

    return(<AuthContext.Provider value={{userAuth, loggedIn, login}}>

    {props.children}

    </AuthContext.Provider>)
}