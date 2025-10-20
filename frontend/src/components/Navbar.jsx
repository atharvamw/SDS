import { Link } from "react-router-dom"
import sdsLogo from "../assets/sds.png"
import { AuthContext } from "../context/Auth"
import "../styles/Navbar.css"
import { useContext, useEffect } from "react"
export default function Navbar()
{
    const Auth = useContext(AuthContext)

    useEffect(()=>{
        Auth.authenticate()
    }, [])

    async function handleLogout(event)
    {
        if(Auth.userAuth != null)
        {
            const res = await Auth.logout()
        }
        else
            console.log("Already Logged Out!")
    }

    return(
        <nav className="navbar shadow-md sticky top-0 z-50 rounded-sm mb-5">
            <div className="max-w-7xl mx-auto px-6 py-1 flex justify-between items-center" >
                <div className="logo font-bold font-mono text-2xl">
                    <img src={sdsLogo} className="w-13"/>
                </div>
                <ul className="flex space-x-6 items-center m-0">
                    <li className="cursor-pointer hover:text-blue-200"><Link to="/home" className="">Home</Link></li>
                    <li className="cursor-pointer hover:text-blue-200"><Link to="/about">About Us</Link></li>
                    <li className="cursor-pointer hover:text-blue-200"><Link to="/contact">Contact Us</Link></li>
                    <li className="cursor-pointer hover:text-blue-200"><Link to="/members">Members</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/events">Events</Link></li>
                    <li className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-purple-500/50 flex items-center space-x-2 px-3 py-2 mx-3"><Link to="/login">{Auth.userAuth.user === null ? "Admin Login" : Auth.userAuth.user}</Link></li>
                    {Auth.userAuth.user === null ? null : <li className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-purple-500/50 flex items-center space-x-2 px-3 py-2 mx-3"><button className="cursor-pointer" onClick={handleLogout}>Logout</button></li>}
                    <li className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-purple-500/50 flex items-center space-x-2 px-3 py-2 mx-3" ><Link to="/request-project">Request Project</Link></li>
                </ul>
            </div>
        </nav>
    )
}
