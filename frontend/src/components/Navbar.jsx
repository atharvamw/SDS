import { Link } from "react-router-dom"
import { useContext, useEffect } from "react"
import sdsLogo from "../assets/sds.png"
import { AuthContext } from "../context/Auth"
import "../styles/Navbar.css"

export default function Navbar() {
    const Auth = useContext(AuthContext)

    useEffect(() => {
        Auth.authenticate()
    }, [])

    async function handleLogout(event) {
        if(Auth.userAuth != null) {
            const res = await Auth.logout()
        } else {
            console.log("Already Logged Out!")
        }
    }

    return(
        <nav className="navbar shadow-md sticky top-0 z-50 rounded-lg mb-04">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col lg:flex-row justify-between items-center gap-4">
                <div className="logo font-bold font-mono text-2xl">
                    <img src={sdsLogo} className="w-13" alt="SDS Logo"/>
                </div>
                
                <ul className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 lg:gap-6 m-0">
                    <li className="cursor-pointer hover:text-blue-200"><Link to="/home">Home</Link></li>
                    <li className="cursor-pointer hover:text-blue-200"><Link to="/about">About Us</Link></li>
                    <li className="cursor-pointer hover:text-blue-200"><Link to="/contact">Contact Us</Link></li>
                    <li className="cursor-pointer hover:text-blue-200"><Link to="/members">Members</Link></li>
                    <li className="cursor-pointer hover:text-blue-200"><Link to="/projects">Projects</Link></li>
                    <li className="cursor-pointer hover:text-blue-200"><Link to="/events">Events</Link></li>
                    <li className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-purple-500/50 flex items-center px-3 py-2 text-sm sm:text-base whitespace-nowrap">
                        {Auth.userAuth.user === null ? 
                            <Link to="/login">Admin Login</Link> : 
                            <Link to="/dashboard">{Auth.userAuth.user}</Link>
                        }
                    </li>
                    {Auth.userAuth.user !== null && (
                        <li className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-purple-500/50 flex items-center px-3 py-2 text-sm sm:text-base">
                            <button className="cursor-pointer" onClick={handleLogout}>Logout</button>
                        </li>
                    )}
                    <li className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-purple-500/50 flex items-center px-3 py-2 text-sm sm:text-base whitespace-nowrap">
                        <Link to="/request-project">Request Project</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}