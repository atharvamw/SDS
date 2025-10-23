import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import sdsLogo from "../assets/sds.png";
import { AuthContext } from "../context/Auth";

export default function Navbar() {
  const Auth = useContext(AuthContext);

  useEffect(() => {
    Auth.authenticate();
  }, [Auth]);

  async function handleLogout(event) {
    if (Auth.userAuth != null) {
      const res = await Auth.logout();
    } else {
      console.log("Already Logged Out!");
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-purple-500/20 shadow-lg shadow-purple-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col lg:flex-row justify-between items-center gap-4">
        {/* Logo - clickable to home */}
        <Link to="/home" className="logo font-bold font-mono text-2xl hover:opacity-80 transition-opacity">
          <img src={sdsLogo} className="w-13 h-auto" alt="SDS Logo" />
        </Link>

        <ul className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 lg:gap-6 m-0">
          <li className="cursor-pointer text-gray-300 hover:text-cyan-400 transition-colors duration-200" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            <Link to="/home">Home</Link>
          </li>
          <li className="cursor-pointer text-gray-300 hover:text-cyan-400 transition-colors duration-200" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            <Link to="/about">About</Link>
          </li>
          <li className="cursor-pointer text-gray-300 hover:text-cyan-400 transition-colors duration-200" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            <Link to="/projects">Projects</Link>
          </li>
          <li className="cursor-pointer text-gray-300 hover:text-cyan-400 transition-colors duration-200" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            <Link to="/events">Events</Link>
          </li>
          <li className="cursor-pointer text-gray-300 hover:text-cyan-400 transition-colors duration-200" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            <Link to="/team">Team</Link>
          </li>
          <li className="cursor-pointer text-gray-300 hover:text-cyan-400 transition-colors duration-200" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            <Link to="/contact">Contact Us</Link>
          </li>
          
          {/* Admin Login/Dashboard Button */}
          <li className="bg-gradient-to-r from-purple-500 via-teal-500 to-cyan-500 text-white rounded-lg hover:from-purple-600 hover:via-teal-600 hover:to-cyan-600 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center px-3 py-2 text-sm sm:text-base whitespace-nowrap" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            {Auth.userAuth.user === null ? (
              <Link to="/login">Admin Login</Link>
            ) : (
              <Link to="/dashboard">{Auth.userAuth.user}</Link>
            )}
          </li>
          
          {/* Logout Button */}
          {Auth.userAuth.user !== null && (
            <li className="bg-gradient-to-r from-purple-500 via-teal-500 to-cyan-500 text-white rounded-lg hover:from-purple-600 hover:via-teal-600 hover:to-cyan-600 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center px-3 py-2 text-sm sm:text-base" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              <button className="cursor-pointer" onClick={handleLogout}>
                Logout
              </button>
            </li>
          )}
          
          {/* Request Project Button */}
          <li className="bg-gradient-to-r from-purple-500 via-teal-500 to-cyan-500 text-white rounded-lg hover:from-purple-600 hover:via-teal-600 hover:to-cyan-600 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center px-3 py-2 text-sm sm:text-base whitespace-nowrap" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            <Link to="/request-project">Request Project</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
