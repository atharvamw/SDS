import { Link } from "react-router-dom"
import sdsLogo from "../assets/sds.png"
import "../styles/Navbar.css"
export default function Navbar()
{
    return(
        <div className="navbar mb-3 flex justify-around  rounded-sm p-3 items-center px-2" >
            <div className="logo font-bold font-mono text-3xl">
                <img src={sdsLogo} className="w-13"/>
            </div>
            <ul className="navbar flex gap-5 align-center items-center">
                <li className="cursor-pointer hover:text-blue-200"><Link to="/home" className="">Home</Link></li>
                <li className="cursor-pointer hover:text-blue-200"><Link to="/about">About Us</Link></li>
                <li className="cursor-pointer hover:text-blue-200"><Link to="/contact">Contact Us</Link></li>
                <li className="cursor-pointer hover:text-blue-200"><Link to="/members">Members</Link></li>
                <li className="cursor-pointer hover:text-yellow-200 bg-blue-700 text-shadow-lg rounded-2xl p-2 px-4"><a href="/login">Login</a></li>
            </ul>
        </div>
    )
}