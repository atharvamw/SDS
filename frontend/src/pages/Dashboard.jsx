
import { useState } from "react";
import { Users, FolderKanban, FileCheck, Menu, X, Plus, Edit, Trash2, Check, XCircle } from "lucide-react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("members");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Sample data - replace with actual API calls
  const [members, setMembers] = useState([
    { id: 1, name: "John Doe", role: "President", year: "Final Year", branch: "Computer" },
    { id: 2, name: "Jane Smith", role: "Vice President", year: "Third Year", branch: "IT" },
  ]);

  const [projects, setProjects] = useState([
    { id: 1, title: "Campus Portal", status: "Active", tech: "MERN Stack" },
    { id: 2, title: "Event Management", status: "Completed", tech: "React, Firebase" },
  ]);

  const [projectRequests, setProjectRequests] = useState([
    { id: 1, requester: "Prof. Sharma", title: "Library Management System", description: "Need a system to manage library books and student records", status: "pending" },
    { id: 2, requester: "Dr. Patel", title: "Attendance Tracker", description: "Automated attendance system with QR codes", status: "pending" },
  ]);

  const sidebarItems = [
    { id: "members", label: "Team Members", icon: Users },
    { id: "projects", label: "Projects", icon: FolderKanban },
    { id: "requests", label: "Project Requests", icon: FileCheck },
  ];

  return (
    <div className="min-h-screen bg-slate-900 flex">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-slate-800 border-r border-purple-500/20 transition-all duration-300 flex flex-col`}
      >
        {/* Sidebar Header */}
        <div className="p-4 border-b border-purple-500/20 flex items-center justify-between">
          {sidebarOpen && (
            <h2 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Admin Panel
            </h2>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-purple-500/10 rounded-lg transition-colors"
          >
            {sidebarOpen ? <X className="w-5 h-5 text-gray-400" /> : <Menu className="w-5 h-5 text-gray-400" />}
          </button>
        </div>

        {/* Sidebar Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                  activeTab === item.id
                    ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-white"
                    : "text-gray-400 hover:bg-slate-700/50 hover:text-white"
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {sidebarOpen && <span className="font-medium">{item.label}</span>}
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              {sidebarItems.find((item) => item.id === activeTab)?.label}
            </h1>
            <p className="text-gray-400">Manage your {activeTab} efficiently</p>
          </div>

          {/* Team Members Tab */}
          {activeTab === "members" && (
            <div className="space-y-6">
              <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg">
                <Plus className="w-5 h-5" />
                <span>Add New Member</span>
              </button>

              <div className="grid gap-4">
                {members.map((member) => (
                  <div
                    key={member.id}
                    className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                        <p className="text-purple-400 text-sm mb-2">{member.role}</p>
                        <div className="flex space-x-4 text-sm text-gray-400">
                          <span>{member.year}</span>
                          <span>•</span>
                          <span>{member.branch}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="p-2 text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors">
                          <Edit className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects Tab */}
          {activeTab === "projects" && (
            <div className="space-y-6">
              <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg">
                <Plus className="w-5 h-5" />
                <span>Add New Project</span>
              </button>

              <div className="grid gap-4">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                        <div className="flex items-center space-x-3">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              project.status === "Active"
                                ? "bg-green-500/10 text-green-400 border border-green-500/20"
                                : "bg-gray-500/10 text-gray-400 border border-gray-500/20"
                            }`}
                          >
                            {project.status}
                          </span>
                          <span className="text-sm text-gray-400">{project.tech}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="p-2 text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors">
                          <Edit className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Project Requests Tab */}
          {activeTab === "requests" && (
            <div className="space-y-6">
              <div className="grid gap-4">
                {projectRequests.map((request) => (
                  <div
                    key={request.id}
                    className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-bold text-white">{request.title}</h3>
                          <span className="px-3 py-1 bg-yellow-500/10 text-yellow-400 text-xs font-medium rounded-full border border-yellow-500/20">
                            Pending
                          </span>
                        </div>
                        <p className="text-sm text-gray-400 mb-2">Requested by: {request.requester}</p>
                        <p className="text-gray-300">{request.description}</p>
                      </div>
                    </div>
                    <div className="flex space-x-3 pt-4 border-t border-slate-700">
                      <button className="flex items-center space-x-2 px-4 py-2 bg-green-500/10 text-green-400 rounded-lg hover:bg-green-500/20 transition-colors border border-green-500/20">
                        <Check className="w-4 h-4" />
                        <span>Approve</span>
                      </button>
                      <button className="flex items-center space-x-2 px-4 py-2 bg-red-500/10 text-red-400 rounded-lg hover:bg-red-500/20 transition-colors border border-red-500/20">
                        <XCircle className="w-4 h-4" />
                        <span>Reject</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}