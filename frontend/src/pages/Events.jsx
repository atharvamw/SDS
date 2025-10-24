import React from "react";
import { Calendar } from "lucide-react";
import Bg from "../components/Background";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const talks = [
  {
    tag: "Hackathon",
    date: "September 2024",
    title: "Road to Smart India Hackathon: Insights and Strategies",
  },
  {
    tag: "Blockchain",
    date: "November 2021",
    title: "Blockchain 101 Session, conducted by Soureesh Patil",
  },
  {
    tag: "Hackathon 5.0",
    date: "October 2021",
    title: "Collaboration with Mindspark for 5.0 Hackathon",
  },
  {
    tag: "MERN Stack",
    date: "October 2021",
    title: "MERN Stack Hands-on Session, conducted by Shreya Vaidya and Sameer",
  },
  {
    tag: "Online Elections",
    date: "August 2021",
    title: "Conducted Online Elections for Gymkhana and Gathering Secretary",
  },
  {
    tag: "Resume",
    date: "June 2021",
    title:
      "Resume Building and Placement Preparation Session by Prasad Rathod (MTS @ VMware)",
  },
  {
    tag: "React Native",
    date: "April 2021",
    title: "Hands-on workshop on React Native",
  },
  {
    tag: "Docker",
    date: "August 2020",
    title: "Hands-on 2 day workshop on Docker",
  },
  {
    tag: "Redux",
    date: "July 2020",
    title: "Hands-on 2 day workshop on Redux by Savan Nahar",
  },
  {
    tag: "SDS Alumni Meet",
    date: "May 2020",
    title: "SDS Alumni Meet and QnA Session through Zoom",
  },
  {
    tag: "Progressive Web",
    date: "February 2020",
    title: "Session on Progressive Web App by Rohit Chaudhari",
  },
  {
    tag: "Nginx",
    date: "",
    title: "Hands-on session on Nginx",
  },
  {
    tag: "GraphQL and Gatsby.js",
    date: "February 2020",
    title: "Hands-on 4 day workshop on GraphQL and Gatsby.js",
  },
  {
    tag: "AWS",
    date: "January 2020",
    title: "Hands-on session on deploying projects live on AWS",
  },
  {
    tag: "MERN Stack",
    date: "January 2020",
    title: "Hands-on 3 day workshop on MERN (Mongo Express React Node) stack",
  },
  {
    tag: "Flutter Development",
    date: "November 2019",
    title: "Hands-on 2 day workshop on Flutter Development",
  },
  {
    tag: "Android Development",
    date: "",
    title: "Hands-on session on Android Development",
  },
  {
    tag: "React",
    date: "October 2019",
    title: "Hands-on 3 day React lecture series",
  },
  {
    tag: "LAMP Stack",
    date: "October 2019",
    title: "Hands-on session on LAMP stack and working with AJAX",
  },
  {
    tag: "Cracking GRE",
    date: "",
    title: "Interactive session by Varad Ghodke on cracking GRE",
  },
  {
    tag: "World of Finance",
    date: "September 2019",
    title: "Talk by Ashish Tetali on the World of Finance",
  },
  {
    tag: "Masters and GRE Prep",
    date: "",
    title: "Talks by Shradhit Subudhi & Parag Verma on Masters & GRE Prep",
  },
];

export default function TalksTimeline() {
  return (
    <>
      <Navbar />
      <Bg>
        <div className="pt-20 sm:pt-24 pb-8 sm:pb-16 px-4 sm:px-6 lg:px-8">
          <section className="mb-12 sm:mb-16 lg:mb-20">
            <div className="max-w-5xl mx-auto">
              {/* Header */}
              <div className="text-center mb-12 sm:mb-16">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-4 sm:mb-6">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                  <span className="text-xs sm:text-sm text-purple-300">
                    Our Events
                  </span>
                </div>

                <h1
                  className="text-6xl md:text-7xl font-bold text-white mb-6 px-4"
                  style={{ fontFamily: "Orbitron, sans-serif" }}
                >
                  <span className="bg-gradient-to-r from-purple-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                    TALKS & SESSIONS
                  </span>
                </h1>

                <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
                  A timeline of workshops, hackathons, and guest lectures hosted
                  by SDS.
                </p>
              </div>

              <div className="relative">
                {/* Vertical Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500/50 via-teal-500/50 to-cyan-500/50 rounded-full h-full"></div>

                {/* Timeline items */}
                {talks.map((item, i) => (
                  <div
                    key={i}
                    className={`relative flex flex-col md:flex-row items-center mb-10 ${
                      i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Horizontal Stem */}
                    <div
                      className={`hidden md:block absolute w-[calc(50%-2.5rem)] h-[2px] bg-gradient-to-r from-purple-400/50 via-teal-400/50 to-cyan-400/50 z-0 ${
                        i % 2 === 0 ? "right-[calc(50%+1.25rem)]" : "left-[calc(50%+1.25rem)]"
                      }`}
                    ></div>

                    {/* Marker */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-slate-900 border-4 border-purple-400 rounded-full z-10 transition-transform hover:scale-125 hover:border-cyan-400"></div>

                    {/* Content Card */}
                    <div
                      className={`bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-xl shadow-lg p-6 w-full md:w-5/12 transition-all duration-300 hover:border-purple-400/40 hover:shadow-xl hover:shadow-purple-500/30 cursor-pointer ${
                        i % 2 === 0 ? "md:mr-auto md:text-right" : "md:ml-auto"
                      }`}
                    >
                      {/* Tag */}
                      <div
                        className={`inline-block px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-purple-500 via-teal-500 to-cyan-500 rounded-full mb-3 ${
                          i % 2 === 0 ? "" : "md:float-right md:clear-both"
                        }`}
                      >
                        {item.tag}
                      </div>

                      {/* Date */}
                      {item.date && (
                        <div className={`text-xs text-gray-400 font-medium mb-2 ${
                          i % 2 === 0 ? "" : "md:text-right"
                        }`}>
                          {item.date}
                        </div>
                      )}

                      {/* Title */}
                      <div
                        className={`text-base font-semibold text-white ${
                          i % 2 === 0 ? "" : "md:text-right"
                        }`}
                        style={{ fontFamily: "Orbitron, sans-serif" }}
                      >
                        {item.title}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-12 sm:mb-20">
            <div className="max-w-7xl mx-auto text-center px-4">
              <h2
                className="text-4xl font-bold mb-4"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                <span className="bg-gradient-to-r from-purple-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  GET IN TOUCH
                </span>
              </h2>
              <p className="text-base text-gray-300 mb-6">
                Have a Project?
              </p>
              <a
                href="/request-project"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 via-teal-500 to-cyan-500 hover:from-purple-600 hover:via-teal-600 hover:to-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 text-sm sm:text-base"
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