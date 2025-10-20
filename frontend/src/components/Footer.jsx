import { Link } from 'react-router-dom';
import { Code2, Mail, MapPin, Phone, Github, Linkedin, Twitter, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Members', path: '/members' },
  ];

  const resources = [
    { name: 'Request Project', path: '/request-project' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Login', path: '/login' },
  ];

  const socialLinks = [
    { icon: Github, url: 'https://github.com/sdscoep', label: 'GitHub' },
    { icon: Linkedin, url: 'https://linkedin.com/company/sdscoep', label: 'LinkedIn' },
    { icon: Twitter, url: 'https://twitter.com/sdscoep', label: 'Twitter' },
    { icon: Instagram, url: 'https://instagram.com/sdscoep', label: 'Instagram' },
  ];

  return (
    <footer className="bg-slate-900 border-t border-purple-500/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code2 className="w-8 h-8 text-purple-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                SDS COEP
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Software Development Section - The official club for software development at COEP Tech. 
              Building solutions, fostering innovation since 2017.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-800 text-gray-400 hover:bg-purple-500/10 hover:text-purple-400 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <span>COEP Technological University<br />Shivajinagar, Pune 411005</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <a href="mailto:sds@coep.ac.in" className="hover:text-purple-400 transition-colors">
                  sds@coep.ac.in
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span>+91 1234567890</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} SDS, COEP. All Rights Reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Made with <Heart className="w-4 h-4 text-red-500 mx-1 fill-current" /> in COEP
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;