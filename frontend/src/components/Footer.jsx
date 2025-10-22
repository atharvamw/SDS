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
    <footer className="bg-slate-900 border-t border-purple-500/20 mt-12 sm:mt-16 md:mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-8">
          {/* Brand Section */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2">
              <Code2 className="w-7 h-7 sm:w-8 sm:h-8 text-purple-400" />
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                SDS COEP
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
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
                  className="p-2 rounded-lg bg-slate-800 text-gray-400 hover:bg-purple-500/10 hover:text-purple-400 transition-all duration-200 active:scale-95"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="sm:col-span-1">
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-base">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="sm:col-span-1">
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-base">Resources</h3>
            <ul className="space-y-2.5">
              {resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-base">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">COEP Technological University<br />Shivajinagar, Pune 411005</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <a href="mailto:sds@coep.ac.in" className="hover:text-purple-400 transition-colors break-all">
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
        <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0 text-center sm:text-left">
            <p className="text-gray-400 text-xs sm:text-sm">
              © {new Date().getFullYear()} SDS, COEP. All Rights Reserved.
            </p>
            <p className="text-gray-400 text-xs sm:text-sm flex items-center">
              Made with <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500 mx-1 fill-current" /> in COEP
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;