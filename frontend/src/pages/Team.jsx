import React from "react";
import { Users } from "lucide-react";
import Bg from "../components/Background";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Team({ team }) {
  return (
    <>
      <Navbar />
      <Bg>
        {/* Main wrapper from About.jsx */}
        <div className="pt-20 sm:pt-24 pb-8 sm:pb-16 px-4 sm:px-6 lg:px-8">
          {/* Main content section */}
          <section className="mb-12 sm:mb-16 lg:mb-20">
            <div className="max-w-7xl mx-auto">
              {/* Header Section (Styled like About.jsx) */}
              <div className="text-center mb-16">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
                  <Users className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-purple-300"> {/* Removed font-['Rajdhani'] */}
                    Our Leaders
                  </span>
                </div>

                <h2
                  className="text-4xl md:text-5xl font-bold text-white mb-4"
                  style={{ fontFamily: "Orbitron, sans-serif" }}
                >
                  Meet Our{" "}
                  <span className="bg-gradient-to-r from-purple-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                    Team
                  </span>
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed"> {/* Removed inline style */}
                  The core team behind SDS — driving innovation, collaboration,
                  and excellence across every project.
                </p>
              </div>

              {/* Team Grid (Styled like About.jsx "Values" section) */}
              <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {team.map((member, idx) => (
                  <div
                    key={idx}
                    className="group backdrop-blur-lg border border-purple-500/20 rounded-xl p-6 text-center hover:border-purple-400/40 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex flex-col items-center">
                      <div
                        className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 via-teal-500 to-cyan-500 flex items-center justify-center mb-4 text-white text-3xl font-bold"
                        style={{ fontFamily: "Orbitron, sans-serif" }}
                      >
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>

                      <h3
                        className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-teal-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-colors" // Adjusted size to text-2xl, font-bold, mb-3
                        style={{ fontFamily: "Orbitron, sans-serif" }}
                      >
                        {member.name}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed"> {/* Removed inline style, added leading-relaxed */}
                        {member.designation}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Get in touch / CTA (Exact copy from About.jsx) */}
          <section className="mb-12 sm:mb-20">
            <div className="max-w-7xl mx-auto text-center px-4">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4" // Sizing matches reference
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                <span className="bg-gradient-to-r from-purple-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  GET IN TOUCH
                </span>
              </h2>
              <p className="text-base text-gray-300 mb-6"> {/* Adjusted size/margin to match reference */}
                Have a Project?
              </p>
              <a
                href="/request-project"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 via-teal-500 to-cyan-500 hover:from-purple-600 hover:via-teal-600 hover:to-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 text-sm sm:text-base" // Adjusted padding to match reference
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                Have a Project? Click Here!
              </a>
            </div>
          </section>
          
         
        </div>
      </Bg>
    </>
  );
}