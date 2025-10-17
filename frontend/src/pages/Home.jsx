
import { useContext } from "react"
import { AuthContext } from "../context/Auth"

export default function Home(props)
{   
    const Auth = useContext(AuthContext);

    return (

        <>  
            <h1 style={{backgroundColor: 'red'}}>Welcome {Auth.userAuth.user!=null ? Auth.userAuth.user : null} Home Page</h1>
            
        </>

    )
}