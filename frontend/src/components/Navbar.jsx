import { Link } from "react-router-dom"
export default function Navbar()
{
    return(
        <div className="navbar mb-3 flex justify-around bg-gray-700 rounded-sm p-3 items-center px-2" >
            <h2 className="font-bold font-mono text-3xl">SDS </h2>
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