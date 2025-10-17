import { createContext, useState, useEffect } from "react"

export const AuthContext = createContext(null)

export function AuthProvider(props)
{
    const [userAuth, setUserAuth] = useState({"user": null})
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        console.log("loggedIn updated:", loggedIn);
    }, [loggedIn]);

    useEffect(() => {
        console.log("userAuth updated:", userAuth);
    }, [userAuth]);

    async function login (user, pass)
    {
        const result = await fetch("http://localhost:5000/login", {
            credentials: "include",
            method: 'Post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: user,
                password: pass,
            })
        })
    
        console.log(user, pass)

        const data = await result.json()

        console.log(data)
        
        if(data.status=="success")
        {   
            setUserAuth({"user": data.username})
            setLoggedIn(true)
            return true
        }
        else
        {
            return false
        }
        
    }

    function logout()
    {
        if(loggedIn === "false" && userAuth == null)
        {
            return true
        }
        else
        {
            setUserAuth({"user": null})
            setLoggedIn(false)
            return true
        }
    }
    

    return(<AuthContext.Provider value={{userAuth, loggedIn, login, logout}}>

    {props.children}

    </AuthContext.Provider>)
}