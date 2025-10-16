export default function Navbar()
{
    return(
        <div className="navbar mb-3 flex justify-around bg-gray-700 rounded-sm p-3 items-center px-2" >
            <h2 className="font-bold font-mono text-3xl">SDS </h2>
            <ul className="navbar flex gap-5 align-center items-center">
                <li className="cursor-pointer hover:text-blue-200"><a href="/home" className="">Home</a></li>
                <li className="cursor-pointer hover:text-blue-200"><a href="/about">About Us</a></li>
                <li className="cursor-pointer hover:text-blue-200"><a href="/contact">Contact Us</a></li>
                <li className="cursor-pointer hover:text-blue-200"><a href="/members">Members</a></li>
                <li className="cursor-pointer hover:text-yellow-200 bg-blue-700 text-shadow-lg rounded-2xl p-2 px-4"><a href="/contact">Login</a></li>
            </ul>
        </div>
    )
}