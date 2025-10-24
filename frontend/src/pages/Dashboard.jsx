import { useEffect, useState } from "react";
import { Users, FolderKanban, FileCheck, Menu, X, Plus, Edit, Trash2, Check, XCircle, Loader2 } from "lucide-react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("members");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [loadingRequests, setLoadingRequests] = useState({});
  const [editingProject, setEditingProject] = useState(null);
  const [editForm, setEditForm] = useState({ title: "", description: "", tech: "" });
  const [deletingProjects, setDeletingProjects] = useState({});
  const [savingProjects, setSavingProjects] = useState({});
  const [rejectingRequests, setRejectingRequests] = useState({});
  const [showAddModal, setShowAddModal] = useState(false);
  const [addForm, setAddForm] = useState({ title: "", description: "", category: "", image: "" });
  const [addingProject, setAddingProject] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const teamRes = await fetch("https://api.sdsclub.pp.ua/getTeam", {
        method: "get",
        credentials: "include",
      });
      const teamData = await teamRes.json();
      setMembers(teamData.team);

      const projectRes = await fetch("https://api.sdsclub.pp.ua/getProjects", {
        method: "get",
        credentials: "include",
      });
      const projectData = await projectRes.json();
      setProjects(projectData.projects);

      const projectRequestRes = await fetch("https://api.sdsclub.pp.ua/getProjectRequests", {
        method: "get",
        credentials: "include",
      });
      const projectRequestData = await projectRequestRes.json();
      setProjectRequests(projectRequestData.data);
    }
    fetchData();
  }, []);

  // Sample data - replace with actual API calls
  const [members, setMembers] = useState([
    { _id: 1, name: "John Doe", role: "President", year: "Final Year", branch: "Computer" },
    { _id: 2, name: "Jane Smith", role: "Vice President", year: "Third Year", branch: "IT" },
  ]);

  const [projects, setProjects] = useState([
    { _id: 1, title: "Campus Portal", status: "Active", tech: "MERN Stack" },
    { _id: 2, title: "Event Management", status: "Completed", tech: "React, Firebase" },
  ]);

  const [projectRequests, setProjectRequests] = useState([
    { _id: 1, name: "Prof. Sharma", title: "Library Management System", description: "Need a system to manage library books and student records", status: "pending" },
    { _id: 2, name: "Dr. Patel", title: "Attendance Tracker", description: "Automated attendance system with QR codes", status: "pending" },
  ]);

  const sidebarItems = [
    { id: "members", label: "Team Members", icon: Users },
    { id: "projects", label: "Projects", icon: FolderKanban },
    { id: "requests", label: "Project Requests", icon: FileCheck },
  ];

  async function handleApprove(requestId) {
    setLoadingRequests((prev) => ({ ...prev, [requestId]: true }));

    try {
      const response = await fetch("https://api.sdsclub.pp.ua/approveProjectRequest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ id: requestId }),
      });

      const result = await response.json();

      if (result.status === "success") {
        // Remove approved request from state
        setProjectRequests((prev) => prev.filter((req) => req._id !== requestId));
        
        // Re-fetch projects to get the newly approved project
        const projectRes = await fetch("https://api.sdsclub.pp.ua/getProjects", {
          method: "get",
          credentials: "include",
        });
        const projectData = await projectRes.json();
        setProjects(projectData.projects);
      } else {
        alert("Failed to approve request: " + (result.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Error approving request:", error);
      alert("Failed to approve request. Please try again.");
    } finally {
      setLoadingRequests((prev) => ({ ...prev, [requestId]: false }));
    }
  }

  async function handleReject(requestId) {
    if (!confirm("Are you sure you want to reject this project request?")) {
      return;
    }

    setRejectingRequests((prev) => ({ ...prev, [requestId]: true }));

    try {
      const response = await fetch("https://api.sdsclub.pp.ua/deleteProjectRequest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ id: requestId }),
      });

      const result = await response.json();

      if (result.status === "success") {
        // Remove rejected request from state
        setProjectRequests((prev) => prev.filter((req) => req._id !== requestId));
      } else {
        alert("Failed to reject request: " + (result.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Error rejecting request:", error);
      alert("Failed to reject request. Please try again.");
    } finally {
      setRejectingRequests((prev) => ({ ...prev, [requestId]: false }));
    }
  }

  function handleEditProject(project) {
    setEditingProject(project._id);
    setEditForm({
      title: project.title,
      description: project.description || "",
      tech: project.tech || "",
    });
  }

  function handleCancelEdit() {
    setEditingProject(null);
    setEditForm({ title: "", description: "", tech: "" });
  }

  async function handleSaveProject(projectId) {
    setSavingProjects((prev) => ({ ...prev, [projectId]: true }));

    try {
      const response = await fetch("https://api.sdsclub.pp.ua/updateProject", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          id: projectId,
          data: {
            title: editForm.title,
            description: editForm.description,
            tech: editForm.tech,
          },
        }),
      });

      const result = await response.json();

      if (result.status === "success") {
        // Update project in state
        setProjects((prev) =>
          prev.map((p) =>
            p._id === projectId ? { ...p, ...editForm } : p
          )
        );
        setEditingProject(null);
        setEditForm({ title: "", description: "", tech: "" });
      } else {
        alert("Failed to update project: " + (result.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Error updating project:", error);
      alert("Failed to update project. Please try again.");
    } finally {
      setSavingProjects((prev) => ({ ...prev, [projectId]: false }));
    }
  }

  async function handleDeleteProject(projectId) {
    if (!confirm("Are you sure you want to delete this project?")) {
      return;
    }

    setDeletingProjects((prev) => ({ ...prev, [projectId]: true }));

    try {
      const response = await fetch("https://api.sdsclub.pp.ua/deleteProject", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ id: projectId }),
      });

      const result = await response.json();

      if (result.status === "success") {
        // Remove deleted project from state
        setProjects((prev) => prev.filter((p) => p._id !== projectId));
      } else {
        alert("Failed to delete project: " + (result.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Error deleting project:", error);
      alert("Failed to delete project. Please try again.");
    } finally {
      setDeletingProjects((prev) => ({ ...prev, [projectId]: false }));
    }
  }

  function handleOpenAddModal() {
    setShowAddModal(true);
    setAddForm({ title: "", description: "", category: "", image: "" });
  }

  function handleCloseAddModal() {
    setShowAddModal(false);
    setAddForm({ title: "", description: "", category: "", image: "" });
  }

  async function handleAddProject(e) {
    e.preventDefault();
    setAddingProject(true);

    try {
      const response = await fetch("https://api.sdsclub.pp.ua/addProject", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          title: addForm.title,
          description: addForm.description,
          category: addForm.category,
          image: addForm.image || undefined,
        }),
      });

      const result = await response.json();

      if (result.status === "success") {
        // Re-fetch projects to get the newly added project
        const projectRes = await fetch("https://api.sdsclub.pp.ua/getProjects", {
          method: "get",
          credentials: "include",
        });
        const projectData = await projectRes.json();
        setProjects(projectData.projects);
        
        handleCloseAddModal();
      } else {
        alert("Failed to add project: " + (result.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Error adding project:", error);
      alert("Failed to add project. Please try again.");
    } finally {
      setAddingProject(false);
    }
  }

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
                    key={member._id}
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
              <button
                onClick={handleOpenAddModal}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg"
              >
                <Plus className="w-5 h-5" />
                <span>Add New Project</span>
              </button>

              <div className="grid gap-4">
                {projects?.map((project) => (
                  <div
                    key={project._id}
                    className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all"
                  >
                    {editingProject === project._id ? (
                      // Edit Mode
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Project Title
                          </label>
                          <input
                            type="text"
                            value={editForm.title}
                            onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                            className="w-full bg-slate-900/50 border border-purple-500/20 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Technology Stack
                          </label>
                          <input
                            type="text"
                            value={editForm.tech}
                            onChange={(e) => setEditForm({ ...editForm, tech: e.target.value })}
                            className="w-full bg-slate-900/50 border border-purple-500/20 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Description
                          </label>
                          <textarea
                            value={editForm.description}
                            onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                            rows="3"
                            className="w-full bg-slate-900/50 border border-purple-500/20 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 resize-none"
                          />
                        </div>
                        <div className="flex space-x-3">
                          <button
                            onClick={() => handleSaveProject(project._id)}
                            disabled={savingProjects[project._id]}
                            className="flex items-center space-x-2 px-4 py-2 bg-green-500/10 text-green-400 rounded-lg hover:bg-green-500/20 transition-colors border border-green-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {savingProjects[project._id] ? (
                              <>
                                <Loader2 className="w-4 h-4 animate-spin" />
                                <span>Saving...</span>
                              </>
                            ) : (
                              <>
                                <Check className="w-4 h-4" />
                                <span>Save</span>
                              </>
                            )}
                          </button>
                          <button
                            onClick={handleCancelEdit}
                            disabled={savingProjects[project._id]}
                            className="flex items-center space-x-2 px-4 py-2 bg-gray-500/10 text-gray-400 rounded-lg hover:bg-gray-500/20 transition-colors border border-gray-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <XCircle className="w-4 h-4" />
                            <span>Cancel</span>
                          </button>
                        </div>
                      </div>
                    ) : (
                      // View Mode
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
                          {project.description && (
                            <p className="text-gray-400 text-sm mt-2">{project.description}</p>
                          )}
                        </div>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleEditProject(project)}
                            className="p-2 text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors"
                          >
                            <Edit className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => handleDeleteProject(project._id)}
                            disabled={deletingProjects[project._id]}
                            className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            {deletingProjects[project._id] ? (
                              <Loader2 className="w-5 h-5 animate-spin" />
                            ) : (
                              <Trash2 className="w-5 h-5" />
                            )}
                          </button>
                        </div>
                      </div>
                    )}
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
                    key={request._id}
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
                        <p className="text-sm text-gray-400 mb-2">Requested by: {request.name}</p>
                        <p className="text-gray-300">{request.description}</p>
                      </div>
                    </div>
                    <div className="flex space-x-3 pt-4 border-t border-slate-700">
                      <button
                        onClick={() => handleApprove(request._id)}
                        disabled={loadingRequests[request._id]}
                        className="cursor-pointer flex items-center space-x-2 px-4 py-2 bg-green-500/10 text-green-400 rounded-lg hover:bg-green-500/20 transition-colors border border-green-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {loadingRequests[request._id] ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Approving...</span>
                          </>
                        ) : (
                          <>
                            <Check className="w-4 h-4" />
                            <span>Approve</span>
                          </>
                        )}
                      </button>
                      <button
                        onClick={() => handleReject(request._id)}
                        disabled={rejectingRequests[request._id]}
                        className="cursor-pointer flex items-center space-x-2 px-4 py-2 bg-red-500/10 text-red-400 rounded-lg hover:bg-red-500/20 transition-colors border border-red-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {rejectingRequests[request._id] ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Rejecting...</span>
                          </>
                        ) : (
                          <>
                            <XCircle className="w-4 h-4" />
                            <span>Reject</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Add Project Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 border border-purple-500/20 rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Add New Project</h2>
              <button
                onClick={handleCloseAddModal}
                className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            <form onSubmit={handleAddProject} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Project Title *
                </label>
                <input
                  type="text"
                  value={addForm.title}
                  onChange={(e) => setAddForm({ ...addForm, title: e.target.value })}
                  className="w-full bg-slate-900/50 border border-purple-500/20 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  placeholder="Enter project title"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Description *
                </label>
                <textarea
                  value={addForm.description}
                  onChange={(e) => setAddForm({ ...addForm, description: e.target.value })}
                  rows="4"
                  className="w-full bg-slate-900/50 border border-purple-500/20 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 resize-none"
                  placeholder="Describe the project"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Category *
                </label>
                <input
                  type="text"
                  value={addForm.category}
                  onChange={(e) => setAddForm({ ...addForm, category: e.target.value })}
                  className="w-full bg-slate-900/50 border border-purple-500/20 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  placeholder="e.g., Web Development, Mobile App"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Image URL (Optional)
                </label>
                <input
                  type="url"
                  value={addForm.image}
                  onChange={(e) => setAddForm({ ...addForm, image: e.target.value })}
                  className="w-full bg-slate-900/50 border border-purple-500/20 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  type="submit"
                  disabled={addingProject}
                  className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {addingProject ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Adding Project...</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-5 h-5" />
                      <span>Add Project</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={handleCloseAddModal}
                  disabled={addingProject}
                  className="px-6 py-3 bg-slate-700 text-gray-300 rounded-lg hover:bg-slate-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}