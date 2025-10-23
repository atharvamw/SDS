import {
  Code2,
  Users,
  Award,
  Target,
  Zap,
  Heart,
  BookOpen,
  Lightbulb,
} from "lucide-react";
import sdsSession from "../assets/session.png";
import Bg from "../components/Background";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  const values = [
    {
      icon: Code2,
      title: "Innovation",
      description:
        "Constantly pushing boundaries with cutting-edge technology and creative solutions",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Working together to achieve common goals and build lasting relationships",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "Maintaining the highest standards in everything we create and deliver",
    },
    {
      icon: Heart,
      title: "Community",
      description:
        "Building a supportive environment where everyone can learn and grow",
    },
  ];

  return (
    <>
      <Navbar />
      <Bg>
        <div className="pt-20 sm:pt-24 pb-8 sm:pb-16 px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="mb-12 sm:mb-16 lg:mb-20">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8 sm:mb-12">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-4 sm:mb-6">
                  <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                  <span className="text-xs sm:text-sm text-purple-300 font-['Rajdhani']">About SDS</span>
                </div>

                <h2 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 px-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  <span className="bg-gradient-to-r from-purple-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                    WHO WE ARE
                  </span>
                </h2>

                <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4 font-['Rajdhani']">
                  SDS is a team of students who take up projects with the aim of
                  resolving technical needs of the college.
                </p>
              </div>

              {/* Mission / Vision card */}
              <div className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-6 sm:p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                      <span className="bg-gradient-to-r from-purple-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                        THE START
                      </span>
                    </h2>
                    <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base font-['Rajdhani']">
                      The club was founded by a group of final year computer engineering
                      students on April 26th, 2017.
                    </p>

                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2 sm:mb-3" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                      <span className="bg-gradient-to-r from-purple-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                        THE AUTHORITY
                      </span>
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base font-['Rajdhani']">
                      SDS is the only club in COEP for software development which is
                      officially approved by Gymkhana.
                    </p>

                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2 sm:mb-3" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                      <span className="bg-gradient-to-r from-purple-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                        THE CODE
                      </span>
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base font-['Rajdhani']">
                      Our team is proficient in C, JAVA, LAMP Stack, MERN Stack, Drupal
                      and Full stack web development.
                    </p>

                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-start space-x-3">
                        <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 flex-shrink-0 mt-1" />
                        <p className="text-gray-300 text-xs sm:text-sm md:text-base font-['Rajdhani']">
                          SDS hosts numerous events including workshops, technical talks,
                          hackathons and other technical competitions throughout the year.
                        </p>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 flex-shrink-0 mt-1" />
                        <p className="text-gray-300 text-xs sm:text-sm md:text-base font-['Rajdhani']">
                          To promote in-house development of technological solutions and
                          provide a platform for software development to students.
                        </p>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Target className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 flex-shrink-0 mt-1" />
                        <p className="text-gray-300 text-xs sm:text-sm md:text-base font-['Rajdhani']">
                          The core team is responsible for overall functioning of the club
                          and consists of 8 students for the year 2024-25.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="order-1 md:order-2">
                    <img
                      src={sdsSession}
                      alt="About SDS"
                      className="w-full h-auto rounded-lg shadow-lg shadow-purple-500/20"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-12 sm:mb-16 lg:mb-20">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8 sm:mb-12">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-4 sm:mb-6">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                  <span className="text-xs sm:text-sm text-purple-300 font-['Rajdhani']">Our Values</span>
                </div>

                <h2 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 px-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  <span className="bg-gradient-to-r from-purple-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                    WHAT WE STAND FOR
                  </span>
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-5xl mx-auto leading-relaxed px-4 font-['Rajdhani']">
                  At SDS, our core values define who we are and guide everything we do.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div
                      key={index}
                      className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-xl p-6 sm:p-8 text-center hover:border-purple-400/40 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 cursor-pointer"
                    >
                      <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-purple-400 mx-auto mb-4" />
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Orbitron, sans-serif' }}>{value.title}</h3>
                      <p className="text-gray-400 text-sm sm:text-base font-['Rajdhani']">{value.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-12 sm:mb-16 lg:mb-20">
            <div className="max-w-7xl mx-auto text-center">
              <div className="inline-flex items-center justify-center space-x-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-4 sm:mb-6">
                <span className="text-xs sm:text-sm text-purple-300 font-['Rajdhani']">Our Impact</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 px-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                <span className="bg-gradient-to-r from-purple-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  BY THE NUMBERS
                </span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto px-4">
                <div className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-xl p-8 sm:p-10 hover:border-cyan-400/60 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300 cursor-pointer group">
                  <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-purple-400 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300 mb-3 sm:mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>30</h3>
                  <p className="text-gray-300 text-base sm:text-lg font-['Rajdhani']">Active Members</p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-xl p-8 sm:p-10 hover:border-cyan-400/60 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300 cursor-pointer group">
                  <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-purple-400 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300 mb-3 sm:mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>22</h3>
                  <p className="text-gray-300 text-base sm:text-lg font-['Rajdhani']">Completed Projects</p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-xl p-8 sm:p-10 hover:border-cyan-400/60 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300 cursor-pointer group sm:col-span-3 lg:col-span-1">
                  <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-purple-400 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300 mb-3 sm:mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>51,391</h3>
                  <p className="text-gray-300 text-base sm:text-lg font-['Rajdhani']">Lines of Code</p>
                </div>
              </div>
            </div>
          </section>

          {/* Get in touch / CTA */}
          <section className="mb-12 sm:mb-20">
            <div className="max-w-7xl mx-auto text-center px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                <span className="bg-gradient-to-r from-purple-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  GET IN TOUCH
                </span>
              </h2>
              <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg font-['Rajdhani']">Have a Project?</p>
              <a
                href="/request-project"
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 via-teal-500 to-cyan-500 hover:from-purple-600 hover:via-teal-600 hover:to-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                Have a Project? Click Here!
              </a>
            </div>
          </section>
          <Footer />
        </div>
      </Bg>
    </>
  );
};

export default About;