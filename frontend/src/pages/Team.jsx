import React from "react";
import { Users, Sparkles } from "lucide-react";

export default function Team({ team }) {
  return (
    <div className="min-h-screen bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">Our Leaders</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Team
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The core team behind SDS — driving innovation, collaboration, and excellence across every project.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="group bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-xl overflow-hidden hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105 p-6 text-center"
            >
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-4 text-white text-3xl font-bold">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>

                <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-purple-400 transition-colors">
                  {member.name}
                </h3>
                <p className="text-gray-400 text-sm">{member.designation}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-3">
              Want to Join Our Team?
            </h3>
            <p className="text-gray-300 mb-6">
              We’re always looking for passionate developers and innovators to
              contribute to future SDS projects.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-purple-500/50"
            >
              <span>Get in Touch</span>
              <Users className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
