import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900/80 backdrop-blur-lg border-t border-purple-500/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Software Development Section
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building innovative solutions and fostering a community of passionate developers at COEP.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/home" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:sds@coep.ac.in" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  sds@coep.ac.in
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  COEP Technological University, Pune
                </span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-cyan-400 hover:scale-110 transition-all duration-200">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 hover:scale-110 transition-all duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 hover:scale-110 transition-all duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 hover:scale-110 transition-all duration-200">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-500/20 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Software Development Section, COEP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}