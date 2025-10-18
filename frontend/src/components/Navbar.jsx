import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">SDS</h1>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/members">Members</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/request-project" className="text-blue-600">Request Project</Link></li>
        </ul>
      </div>
    </nav>
  );
}
