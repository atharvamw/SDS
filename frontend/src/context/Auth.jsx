import { createContext, useState, useEffect } from "react"

export const AuthContext = createContext(null)

export function AuthProvider(props)
{
    const [userAuth, setUserAuth] = useState({"user": null})

    useEffect(() => {
        console.log("userAuth updated:", userAuth);
    }, [userAuth]);

    async function login (user, pass)
    { 
        try
        {
            const result = await fetch("https://api.sdsclub.pp.ua/login", {
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

            const data = await result.json()

            if(data.status=="success")
            {   
                setUserAuth({"user": data.username})
                return true
            }
            else
            {
                return false
            }
        }
        catch(error)
        {
            console.log(error)
        } 
    }

    async function logout()
    {
        await fetch("https://api.sdsclub.pp.ua/logout", {
            method: "post",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        })

        setUserAuth({"user": null})
        return true
    }

    async function authenticate()
    {
        const result = await fetch("https://api.sdsclub.pp.ua/auth",{
            method: "get",
            credentials: "include"
        })
        const data = await result.json()

        if(data.authentication === "success")
        {
            console.log(data)
            setUserAuth(data.user)
            return true
        }
        else
        {
            console.log(data)
            setUserAuth({"user": null})
            return false
        }
    }
    

    return(<AuthContext.Provider value={{userAuth, setUserAuth, login, logout, authenticate}}>

    {props.children}

    </AuthContext.Provider>)
}