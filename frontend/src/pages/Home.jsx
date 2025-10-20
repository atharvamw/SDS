import { Link } from 'react-router-dom';
import { Code2, Users, Rocket, Trophy, ArrowRight, Sparkles, Terminal, Database, Cloud } from 'lucide-react';

const Home = () => {
  const stats = [
    { icon: Users, value: '30+', label: 'Active Members' },
    { icon: Code2, value: '50+', label: 'Projects Completed' },
    { icon: Trophy, value: '15+', label: 'Hackathons Won' },
    { icon: Rocket, value: '5+', label: 'Years Active' },
  ];

  const features = [
    {
      icon: Terminal,
      title: 'Full Stack Development',
      description: 'Expertise in MERN, LAMP Stack, and modern web technologies',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Database,
      title: 'Technical Workshops',
      description: 'Regular workshops and technical talks throughout the year',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Cloud,
      title: 'Hackathons & Events',
      description: 'Organize and participate in technical competitions',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  const recentProjects = [
    {
      title: 'CoEP Unified Portal',
      description: 'Certificate management system used by 1000+ students',
      tech: ['React', 'Node.js', 'MongoDB'],
      color: 'purple',
    },
    {
      title: 'Campus Connect',
      description: 'Student networking and collaboration platform',
      tech: ['Next.js', 'Firebase', 'Tailwind'],
      color: 'blue',
    },
    {
      title: 'Event Management System',
      description: 'Complete solution for college event organization',
      tech: ['MERN Stack', 'Redux', 'JWT'],
      color: 'green',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300">Officially Approved by COEP Gymkhana</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                Software Development
              </span>
              <br />
              <span className="text-white">Section, COEP</span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              The official club for software development at COEP Tech. We build solutions, 
              foster innovation, and empower students through technology since 2017.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/projects"
                className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-purple-500/50 flex items-center space-x-2"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 bg-slate-800/50 text-white rounded-lg hover:bg-slate-700/50 transition-all duration-200 border border-purple-500/20"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-xl p-6 text-center hover:bg-slate-700/50 transition-all duration-200 group"
              >
                <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What We Do</h2>
            <p className="text-gray-400 text-lg">Excellence in software development and innovation</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${feature.gradient} p-3 mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Recent Projects</h2>
            <p className="text-gray-400 text-lg">Building impactful solutions for the community</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {recentProjects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-lg bg-${project.color}-500/10 border border-${project.color}-500/20 flex items-center justify-center mb-4`}>
                  <Code2 className={`w-6 h-6 text-${project.color}-400`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-500/10 text-purple-300 text-xs rounded-full border border-purple-500/20"
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
              className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Join Our Community?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Be part of COEP's premier software development club and work on exciting projects
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-purple-500/50"
              >
                Get in Touch
              </Link>
              <Link
                to="/members"
                className="px-8 py-4 bg-slate-800/50 text-white rounded-lg hover:bg-slate-700/50 transition-all duration-200 border border-purple-500/20"
              >
                Meet the Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;