import { Mail, Phone, MapPin, Send } from "lucide-react";
import Bg from "../components/Background";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    // This structure now perfectly matches About.jsx
    <>
      <Navbar />
      <Bg>
        {/* The main content div is INSIDE Bg, with the top padding */}
        <div className="pt-20 sm:pt-24 pb-8 sm:pb-16 px-4 sm:px-6 lg:px-8">
          
          {/* We wrap the content in a max-w-6xl div to match your original layout */}
          <div className="max-w-6xl mx-auto">
            
            {/* Header (Styled like About.jsx) */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
                <Mail className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-300 font-['Rajdhani']">
                  Get In Touch
                </span>
              </div>
              <h1
                className="text-4xl md:text-5xl font-bold text-white mb-4"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                <span className="bg-gradient-to-r from-purple-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  CONTACT US
                </span>
              </h1>
              <p
                className="text-gray-300 text-lg max-w-2xl mx-auto"
                style={{ fontFamily: "Rajdhani, sans-serif" }}
              >
                Have questions or want to collaborate with SDS? We'd love to hear
                from you!
              </p>
            </div>

            {/* Contact Info Cards (Styled like About.jsx "Values") */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="group bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-xl p-6 text-center hover:border-purple-400/40 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 cursor-pointer">
                <Mail className="w-10 h-10 sm:w-12 sm:h-12 text-purple-400 mx-auto mb-4" />
                <h3
                  className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3"
                  style={{ fontFamily: "Orbitron, sans-serif" }}
                >
                  Email
                </h3>
                <a
                  href="mailto:sds@coep.ac.in"
                  className="text-gray-400 group-hover:text-purple-400 transition-colors text-sm sm:text-base font-['Rajdhani']"
                >
                  sds@coep.ac.in
                </a>
              </div>

              <div className="group bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-xl p-6 text-center hover:border-purple-400/40 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 cursor-pointer">
                <Phone className="w-10 h-10 sm:w-12 sm:h-12 text-purple-400 mx-auto mb-4" />
                <h3
                  className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3"
                  style={{ fontFamily: "Orbitron, sans-serif" }}
                >
                  Phone
                </h3>
                <p className="text-gray-400 text-sm sm:text-base font-['Rajdhani']">
                  +91 1234567890
                </p>
              </div>

              <div className="group bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-xl p-6 text-center hover:border-purple-400/40 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 cursor-pointer">
                <MapPin className="w-10 h-10 sm:w-12 sm:h-12 text-purple-400 mx-auto mb-4" />
                <h3
                  className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3"
                  style={{ fontFamily: "Orbitron, sans-serif" }}
                >
                  Location
                </h3>
                <p className="text-gray-400 text-sm sm:text-base font-['Rajdhani']">
                  COEP Tech, Pune
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-8 md:p-12">
              <h2
                className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                <span className="bg-gradient-to-r from-purple-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  Send Us a Message
                </span>
              </h2>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-slate-900/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all font-['Rajdhani']"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-slate-900/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all font-['Rajdhani']"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows="5"
                    className="w-full bg-slate-900/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all resize-none font-['Rajdhani']"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 via-teal-500 to-cyan-500 hover:from-purple-600 hover:via-teal-600 hover:to-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                  style={{ fontFamily: "Orbitron, sans-serif" }}
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </Bg>
    </>
  );
}