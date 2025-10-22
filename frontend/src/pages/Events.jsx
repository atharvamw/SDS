import React from "react";

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
    title:
      "Conducted Online Elections for Gymkhana and Gathering Secretary",
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
    <div className="min-h-screen bg-gradient-to-br px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 drop-shadow-lg">
          Talks and Sessions
        </h1>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-white/70 to-white/20 rounded-full h-full"></div>

          {/* Timeline items */}
          {talks.map((item, i) => (
            <div
              key={i}
              className={`relative flex flex-col md:flex-row items-center mb-10 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Marker */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-white border-4 border-indigo-500 rounded-full z-10 transition-transform hover:scale-125"></div>

              {/* Content */}
              <div
                className={`bg-white text-gray-800 rounded-xl shadow-lg p-6 w-full md:w-5/12 ${
                  i % 2 === 0 ? "md:mr-auto md:text-right" : "md:ml-auto"
                }`}
              >
                <div className="inline-block px-3 py-1 text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-3">
                  {item.tag}
                </div>
                {item.date && (
                  <div className="text-sm text-gray-500 font-medium mb-1">
                    {item.date}
                  </div>
                )}
                <div className="text-lg font-semibold">{item.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
