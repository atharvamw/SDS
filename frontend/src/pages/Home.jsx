import { Link } from "react-router-dom";
import {
  Code2,
  Users,
  Rocket,
  Trophy,
  ArrowRight,
  Sparkles,
  Terminal,
  Database,
  Cloud,
} from "lucide-react";
import Bg from "../components/Background";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const stats = [
    { icon: Users, value: "30+", label: "Active Members" },
    { icon: Code2, value: "50+", label: "Projects Completed" },
    { icon: Trophy, value: "15+", label: "Hackathons Won" },
    { icon: Rocket, value: "5+ (Since 2017)", label: "Years Active" }, // Tweaked label for clarity
  ];

  const features = [
    {
      icon: Terminal,
      title: "Full Stack Development",
      description: "Expertise in MERN, LAMP Stack, and modern web technologies",
    },
    {
      icon: Database,
      title: "Technical Workshops",
      description: "Regular workshops and technical talks throughout the year",
    },
    {
      icon: Cloud,
      title: "Hackathons & Events",
      description: "Organize and participate in technical competitions",
    },
  ];

  const recentProjects = [
    {
      title: "COEP Unified Portal",
      description: "Certificate management system used by 1000+ students",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Campus Connect",
      description: "Student networking and collaboration platform",
      tech: ["Next.js", "Firebase", "Tailwind"],
    },
    {
      title: "Event Management System",
      description: "Complete solution for college event organization",
      tech: ["MERN Stack", "Redux", "JWT"],
    },
  ];

  return (
    <>
      <Navbar />
      <Bg>
        {/* Main wrapper div from About.jsx */}
        <div className="pt-20 sm:pt-24 pb-8 sm:pb-16 px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <section className="relative pb-20 sm:pb-24 lg:pb-32 mb-12 sm:mb-16 lg:mb-20">
            {/* Removed old pulse animations, <Bg /> handles this */}
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="text-center space-y-8">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-purple-300 font-['Rajdhani']"> {/* Added font */}
                    Officially Approved by COEP Gymkhana
                  </span>
                </div>

                <h1
                  className="text-5xl md:text-7xl font-bold"
                  style={{ fontFamily: "Orbitron, sans-serif" }} // Added font
                >
                  {/* === THIS IS THE "SPECIAL" PART === */}
                  <span className="bg-gradient-to-r from-purple-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]"> {/* Matched gradient & kept animate */}
                    SOFTWARE DEVELOPMENT SECTION
                  </span>
                  {/* ================================== */}
                  <br />
                  <span className="text-white">COEP Technological University</span>
                </h1>

                <p
                  className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                  style={{ fontFamily: "Rajdhani, sans-serif" }} // Added font
                >
                  The official club for software development at COEP Tech. We
                  build solutions, foster innovation, and empower students
                  through technology since 2017.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    to="/projects"
                    className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 via-teal-500 to-cyan-500 hover:from-purple-600 hover:via-teal-600 hover:to-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 text-sm sm:text-base" // Matched button style
                    style={{ fontFamily: "Orbitron, sans-serif" }} // Added font
                  >
                    <span>Explore Projects</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/about"
                    className="inline-flex items-center px-8 py-4 bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 text-white font-semibold rounded-lg hover:border-purple-400/40 hover:scale-105 transition-all duration-300 text-sm sm:text-base" // Matched card style as secondary button
                    style={{ fontFamily: "Orbitron, sans-serif" }} // Added font
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section (Styled like About.jsx stats) */}
          <section className="mb-12 sm:mb-16 lg:mb-20">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-xl p-6 text-center hover:border-cyan-400/60 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300 cursor-pointer group" // Matched hover style from About.jsx
                  >
                    <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <div
                      className="text-3xl font-bold text-purple-400 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300 mb-1" // Matched hover style
                      style={{ fontFamily: "Orbitron, sans-serif" }} // Added font
                    >
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400 font-['Rajdhani']"> {/* Added font */}
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section (Styled like About.jsx "Values") */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2
                  className="text-4xl font-bold text-white mb-4"
                  style={{ fontFamily: "Orbitron, sans-serif" }}
                >
                  <span className="bg-gradient-to-r from-purple-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                    What We Do
                  </span>
                </h2>
                <p className="text-gray-300 text-lg font-['Rajdhani']">
                  Excellence in software development and innovation
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-xl p-8 hover:border-purple-400/40 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 group cursor-pointer" // Matched card style
                  >
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-purple-500 via-teal-500 to-cyan-500 p-3 mb-6 group-hover:scale-110 transition-transform"> {/* Matched gradient */}
                      <feature.icon className="w-full h-full text-white" />
                    </div>
                    <h3
                      className="text-xl font-bold text-white mb-3"
                      style={{ fontFamily: "Orbitron, sans-serif" }}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed font-['Rajdhani']">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Recent Projects (Styled like cards) */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2
                  className="text-4xl font-bold text-white mb-4"
                  style={{ fontFamily: "Orbitron, sans-serif" }}
                >
                  <span className="bg-gradient-to-r from-purple-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                    Recent Projects
                  </span>
                </h2>
                <p className="text-gray-300 text-lg font-['Rajdhani']">
                  Building impactful solutions for the community
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {recentProjects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-xl p-6 hover:border-purple-400/40 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 group cursor-pointer" // Matched card style
                  >
                    <div className="w-12 h-12 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4"> {/* Standardized to purple */}
                      <Code2 className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3
                      className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-teal-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-colors" // Matched hover text
                      style={{ fontFamily: "Orbitron, sans-serif" }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm font-['Rajdhani']">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-purple-500/10 text-purple-300 text-xs rounded-full border border-purple-500/20 font-['Rajdhani']" // Matched pill style
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <Link
                  to="/projects"
                  className="inline-flex items-center space-x-2 text-purple-400 hover:text-cyan-400 transition-colors font-['Rajdhani'] text-lg" // Themed link
                >
                  <span>View All Projects</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </section>

          {/* CTA Section (Exact copy from About.jsx) */}
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
      </Bg>
    </>
  );
};

export default Home;