import React from "react"; // Removed unused useEffect/useState
import { Code2, ExternalLink, Sparkles } from "lucide-react";
import Bg from "../components/Background";
import Navbar from "../components/Navbar"; // Added Navbar import
import Footer from "../components/Footer"; // Added Footer import

export default function Projects({ projects }) {
  return (
    <>
      <Navbar />
      <Bg>
        {/* Copied this exact wrapper div from About.jsx */}
        <div className="pt-20 sm:pt-24 pb-8 sm:pb-16 px-4 sm:px-6 lg:px-8">
          
          {/* --- Start of Projects Content --- */}
          {/* We wrap in a max-w-7xl mx-auto div to match the <section> structure in About.jsx */}
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-300 font-['Rajdhani']"> {/* Added font */}
                  Our Work
                </span>
              </div>

              <h2
                className="text-4xl md:text-5xl font-bold text-white mb-4"
                style={{ fontFamily: "Orbitron, sans-serif" }} // Added font
              >
                
                <span className="bg-gradient-to-r from-purple-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent"> {/* Matched gradient */}
                  OUR PROJECTS
                </span>
              </h2>
              <p
                className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"
                style={{ fontFamily: "Rajdhani, sans-serif" }} // Added font
              >
                Projects at SDS aim to solve real-world problems faced by the
                college, covering domains from database management to web &
                mobile apps.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16 sm:mb-20"> {/* Adjusted margin */}
              {projects.map((p, idx) => (
                <div
                  key={idx}
                  // Matched hover style from About.jsx value cards
                  className="group bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-xl overflow-hidden hover:border-purple-400/40 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 cursor-pointer"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <Code2 className="w-6 h-6 text-purple-400 flex-shrink-0" />
                      {/* Assuming p.link holds the project URL */}
                      <a href={p.link || '#'} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                      </a>
                    </div>

                    <h3
                      className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-teal-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-colors"
                      style={{ fontFamily: "Orbitron, sans-serif" }} // Added font & matched hover
                    >
                      {p.title}
                    </h3>
                    <p
                      className="text-gray-400 text-sm leading-relaxed"
                      style={{ fontFamily: "Rajdhani, sans-serif" }} // Added font
                    >
                      {p.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section - Replaced with the exact CTA from About.jsx */}
            <section className="mb-12 sm:mb-20">
              <div className="max-w-7xl mx-auto text-center px-4">
                <h2
                  className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4"
                  style={{ fontFamily: "Orbitron, sans-serif" }}
                >
                  <span className="bg-gradient-to-r from-purple-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                    GET IN TOUCH
                  </span>
                </h2>
                <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg font-['Rajdhani']">
                  Have a Project?
                </p>
                <a
                  href="/request-project"
                  className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 via-teal-500 to-cyan-500 hover:from-purple-600 hover:via-teal-600 hover:to-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                  style={{ fontFamily: "Orbitron, sans-serif" }}
                >
                  Have a Project? Click Here!
                </a>
              </div>
            </section>
          </div>
          {/* --- End of Projects Content --- */}

  
        </div>
      </Bg>
    </>
  );
}