import { useContext } from "react"
import {AuthContext} from "../context/Auth"
import {Navigate} from "react-router-dom"

export default function ProtectedRoute({children})
{
    const Auth = useContext(AuthContext);

    if(Auth.userAuth.user === null)
    {
        return <Navigate to="/login" replace />
    }
    
    return children
}