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
        <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="mb-20">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
                  <BookOpen className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-purple-300">About SDS</span>
                </div>

                <h1 className="text-6xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  
                  <span className="bg-gradient-to-r from-purple-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                    WHO WE ARE
                  </span>
                </h1>

                <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  SDS is a team of students who take up projects with the aim of
                  resolving technical needs of the college.
                </p>
              </div>

              {/* Mission / Vision card */}
              <div className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>THE START</h2>
                    <p className="text-base text-gray-300 leading-relaxed mb-6">
                      The club was founded by a group of final year computer engineering
                      students on April 26th, 2017.
                    </p>

                    <h3 className="text-3xl font-semibold text-white mb-3" style={{ fontFamily: 'Orbitron, sans-serif' }}>THE AUTHORITY</h3>
                    <p className="text-base text-gray-300 leading-relaxed mb-6">
                      SDS is the only club in COEP for software development which is
                      officially approved by Gymkhana.
                    </p>

                    <h3 className="text-3xl font-semibold text-white mb-3" style={{ fontFamily: 'Orbitron, sans-serif' }}>THE CODE</h3>
                    <p className="text-base text-gray-300 leading-relaxed mb-6">
                      Our team is proficient in C, JAVA, LAMP Stack, MERN Stack, Drupal
                      and Full stack web development.
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <Zap className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                        <p className="text-gray-300 text-sm">
                          SDS hosts numerous events including workshops, technical talks,
                          hackathons and other technical competitions throughout the year.
                        </p>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Lightbulb className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                        <p className="text-gray-300 text-sm">
                          To promote in-house development of technological solutions and
                          provide a platform for software development to students.
                        </p>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Target className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
                        <p className="text-gray-300 text-sm">
                          The core team is responsible for overall functioning of the club
                          and consists of 8 students for the year 2024-25.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <img
                      src={sdsSession}
                      alt="About SDS"
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-12">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
                  <Heart className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-purple-300">Our Values</span>
                </div>

                <h2 className="text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>What We Stand For</h2>
                <p className="text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  At SDS, our core values define who we are and guide everything we do.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div
                      key={index}
                      className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-xl p-6 text-center hover:border-purple-400/40 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 cursor-pointer"
                    >
                      <Icon className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'Orbitron, sans-serif' }}>{value.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{value.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-20">
            <div className="max-w-7xl mx-auto text-center">
              <div className="inline-flex items-center justify-center space-x-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
                <span className="text-sm text-purple-300">Our Impact</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
                <div className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-xl p-6 hover:border-cyan-400/60 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300 cursor-pointer group">
                  <h3 className="text-4xl font-bold text-purple-400 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300 mb-3" style={{ fontFamily: 'Orbitron, sans-serif' }}>30</h3>
                  <p className="text-base text-gray-300">Active Members</p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-xl p-6 hover:border-cyan-400/60 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300 cursor-pointer group">
                  <h3 className="text-4xl font-bold text-purple-400 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300 mb-3" style={{ fontFamily: 'Orbitron, sans-serif' }}>22</h3>
                  <p className="text-base text-gray-300">Completed Projects</p>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-xl p-6 hover:border-cyan-400/60 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-300 cursor-pointer group">
                  <h3 className="text-4xl font-bold text-purple-400 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-teal-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300 mb-3" style={{ fontFamily: 'Orbitron, sans-serif' }}>51,391</h3>
                  <p className="text-base text-gray-300">Lines of Code</p>
                </div>
              </div>
            </div>
          </section>

          {/* Get in touch / CTA */}
          <section className="mb-20">
            <div className="max-w-7xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>Get in Touch</h2>
              <p className="text-base text-gray-300 mb-6">Have a Project ?</p>
              <a
                href="/request-project"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 via-teal-500 to-cyan-500 hover:from-purple-600 hover:via-teal-600 hover:to-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                Have a Project ? Click Here!
              </a>
            </div>
          </section>
        </div>
      </Bg>
    </>
  );
};

export default About;