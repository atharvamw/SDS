import { useEffect, useState } from "react";
import { Users, FolderKanban, FileCheck, Menu, X, Plus, Edit, Trash2, Check, XCircle, Loader2 } from "lucide-react";

const API_BASE = "https://api.sdsclub.pp.ua";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("members");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  
  // Data states
  const [members, setMembers] = useState([]);
  const [projects, setProjects] = useState([]);
  const [projectRequests, setProjectRequests] = useState([]);
  
  // UI states
  const [loading, setLoading] = useState({});
  const [editing, setEditing] = useState({ type: null, id: null, form: {} });
  const [showModal, setShowModal] = useState({ type: null, form: {} });

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const [teamRes, projectRes, requestRes] = await Promise.all([
        fetch(`${API_BASE}/getTeam`, { credentials: "include" }),
        fetch(`${API_BASE}/getProjects`, { credentials: "include" }),
        fetch(`${API_BASE}/getProjectRequests`, { credentials: "include" }),
      ]);
      
      const [teamData, projectData, requestData] = await Promise.all([
        teamRes.json(),
        projectRes.json(),
        requestRes.json(),
      ]);
      
      setMembers(teamData.team || []);
      setProjects(projectData.projects || []);
      setProjectRequests(requestData.data || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async function apiCall(endpoint, body, loadingKey) {
    setLoading((prev) => ({ ...prev, [loadingKey]: true }));
    try {
      const response = await fetch(`${API_BASE}${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(body),
      });
      const result = await response.json();
      if (result.status !== "success") {
        alert(`Failed: ${result.message || "Unknown error"}`);
      }
      return result.status === "success";
    } catch (error) {
      console.error("API Error:", error);
      alert("Operation failed. Please try again.");
      return false;
    } finally {
      setLoading((prev) => ({ ...prev, [loadingKey]: false }));
    }
  }

  // Generic handlers
  const handleEdit = (type, item) => {
    const form = type === "member" 
      ? { name: item.name, designation: item.designation || "" }
      : { title: item.title, description: item.description || "", tech: item.tech || "", category: item.category || "", image: item.image || "" };
    setEditing({ type, id: item._id, form });
  };

  const handleCancelEdit = () => setEditing({ type: null, id: null, form: {} });

  const handleSave = async (type, id) => {
    const endpoint = type === "member" ? "/updateTeamMember" : "/updateProject";
    const success = await apiCall(endpoint, { id, data: editing.form }, `save_${id}`);
    if (success) {
      if (type === "member") {
        setMembers((prev) => prev.map((m) => (m._id === id ? { ...m, ...editing.form } : m)));
      } else {
        setProjects((prev) => prev.map((p) => (p._id === id ? { ...p, ...editing.form } : p)));
      }
      handleCancelEdit();
    }
  };

  const handleDelete = async (type, id) => {
    if (!confirm(`Are you sure you want to ${type === "member" ? "remove this team member" : "delete this project"}?`)) return;
    
    const endpoint = type === "member" ? "/removeTeamMember" : "/deleteProject";
    const success = await apiCall(endpoint, { id }, `delete_${id}`);
    if (success) {
      if (type === "member") {
        setMembers((prev) => prev.filter((m) => m._id !== id));
      } else {
        setProjects((prev) => prev.filter((p) => p._id !== id));
      }
    }
  };

  const handleAdd = async (e, type) => {
    e.preventDefault();
    const endpoint = type === "member" ? "/addTeamMember" : "/addProject";
    const success = await apiCall(endpoint, showModal.form, `add_${type}`);
    if (success) {
      await fetchData();
      setShowModal({ type: null, form: {} });
    }
  };

  const handleApprove = async (id) => {
    const success = await apiCall("/approveProjectRequest", { id }, `approve_${id}`);
    if (success) {
      setProjectRequests((prev) => prev.filter((req) => req._id !== id));
      await fetchData();
    }
  };

  const handleReject = async (request) => {
    if (!confirm(`Are you sure you want to reject "${request.title}" by ${request.name}?`)) return;
    
    const success = await apiCall("/rejectProjectRequest", { 
      id: request._id,
      name: request.name,
      email: request.email,
      title: request.title
    }, `reject_${request._id}`);
    
    if (success) {
      setProjectRequests((prev) => prev.filter((req) => req._id !== request._id));
    }
  };

  const sidebarItems = [
    { id: "members", label: "Team Members", icon: Users },
    { id: "projects", label: "Projects", icon: FolderKanban },
    { id: "requests", label: "Project Requests", icon: FileCheck },
  ];

  return (
    <div className="min-h-screen bg-slate-900 flex">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? "w-64" : "w-20"} bg-slate-800 border-r border-purple-500/20 transition-all duration-300 flex flex-col`}>
        <div className="p-4 border-b border-purple-500/20 flex items-center justify-between">
          {sidebarOpen && (
            <h2 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Admin Panel
            </h2>
          )}
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-purple-500/10 rounded-lg transition-colors">
            {sidebarOpen ? <X className="w-5 h-5 text-gray-400" /> : <Menu className="w-5 h-5 text-gray-400" />}
          </button>
        </div>

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
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              {sidebarItems.find((item) => item.id === activeTab)?.label}
            </h1>
            <p className="text-gray-400">Manage your {activeTab} efficiently</p>
          </div>

          {/* Team Members Tab */}
          {activeTab === "members" && (
            <div className="space-y-6">
              <button
                onClick={() => setShowModal({ type: "member", form: { name: "", designation: "" } })}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg"
              >
                <Plus className="w-5 h-5" />
                <span>Add New Member</span>
              </button>

              <div className="grid gap-4">
                {members.map((member) => (
                  <div key={member._id} className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all">
                    {editing.type === "member" && editing.id === member._id ? (
                      <div className="space-y-4">
                        <input
                          type="text"
                          value={editing.form.name}
                          onChange={(e) => setEditing({ ...editing, form: { ...editing.form, name: e.target.value } })}
                          className="w-full bg-slate-900/50 border border-purple-500/20 rounded-lg px-4 py-2 text-white"
                          placeholder="Name"
                        />
                        <input
                          type="text"
                          value={editing.form.designation}
                          onChange={(e) => setEditing({ ...editing, form: { ...editing.form, designation: e.target.value } })}
                          className="w-full bg-slate-900/50 border border-purple-500/20 rounded-lg px-4 py-2 text-white"
                          placeholder="Designation"
                        />
                        <div className="flex space-x-3">
                          <button
                            onClick={() => handleSave("member", member._id)}
                            disabled={loading[`save_${member._id}`]}
                            className="flex items-center space-x-2 px-4 py-2 bg-green-500/10 text-green-400 rounded-lg hover:bg-green-500/20 transition-colors border border-green-500/20 disabled:opacity-50"
                          >
                            {loading[`save_${member._id}`] ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
                            <span>{loading[`save_${member._id}`] ? "Saving..." : "Save"}</span>
                          </button>
                          <button onClick={handleCancelEdit} className="flex items-center space-x-2 px-4 py-2 bg-gray-500/10 text-gray-400 rounded-lg hover:bg-gray-500/20 transition-colors border border-gray-500/20">
                            <XCircle className="w-4 h-4" />
                            <span>Cancel</span>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                          <p className="text-purple-400 text-sm mb-2">{member.designation || "No designation"}</p>
                        </div>
                        <div className="flex space-x-2">
                          <button onClick={() => handleEdit("member", member)} className="p-2 text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors">
                            <Edit className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => handleDelete("member", member._id)}
                            disabled={loading[`delete_${member._id}`]}
                            className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors disabled:opacity-50"
                          >
                            {loading[`delete_${member._id}`] ? <Loader2 className="w-5 h-5 animate-spin" /> : <Trash2 className="w-5 h-5" />}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects Tab */}
          {activeTab === "projects" && (
            <div className="space-y-6">
              <button
                onClick={() => setShowModal({ type: "project", form: { title: "", description: "", category: "", image: "" } })}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg"
              >
                <Plus className="w-5 h-5" />
                <span>Add New Project</span>
              </button>

              <div className="grid gap-4">
                {projects?.map((project) => (
                  <div key={project._id} className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all">
                    {editing.type === "project" && editing.id === project._id ? (
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <input type="text" value={editing.form.title} onChange={(e) => setEditing({ ...editing, form: { ...editing.form, title: e.target.value } })} className="w-full bg-slate-900/50 border border-purple-500/20 rounded-lg px-4 py-2 text-white" placeholder="Project Title" required />
                          <input type="text" value={editing.form.category} onChange={(e) => setEditing({ ...editing, form: { ...editing.form, category: e.target.value } })} className="w-full bg-slate-900/50 border border-purple-500/20 rounded-lg px-4 py-2 text-white" placeholder="Category" />
                        </div>
                        <input type="text" value={editing.form.tech} onChange={(e) => setEditing({ ...editing, form: { ...editing.form, tech: e.target.value } })} className="w-full bg-slate-900/50 border border-purple-500/20 rounded-lg px-4 py-2 text-white" placeholder="Technology Stack" />
                        <textarea value={editing.form.description} onChange={(e) => setEditing({ ...editing, form: { ...editing.form, description: e.target.value } })} rows="3" className="w-full bg-slate-900/50 border border-purple-500/20 rounded-lg px-4 py-2 text-white resize-none" placeholder="Description" required />
                        <input type="url" value={editing.form.image} onChange={(e) => setEditing({ ...editing, form: { ...editing.form, image: e.target.value } })} className="w-full bg-slate-900/50 border border-purple-500/20 rounded-lg px-4 py-2 text-white" placeholder="Image URL" />
                        <div className="flex space-x-3 pt-2">
                          <button onClick={() => handleSave("project", project._id)} disabled={loading[`save_${project._id}`]} className="flex items-center space-x-2 px-4 py-2 bg-green-500/10 text-green-400 rounded-lg hover:bg-green-500/20 transition-colors border border-green-500/20 disabled:opacity-50">
                            {loading[`save_${project._id}`] ? <><Loader2 className="w-4 h-4 animate-spin" /><span>Saving...</span></> : <><Check className="w-4 h-4" /><span>Save Changes</span></>}
                          </button>
                          <button onClick={handleCancelEdit} disabled={loading[`save_${project._id}`]} className="flex items-center space-x-2 px-4 py-2 bg-gray-500/10 text-gray-400 rounded-lg hover:bg-gray-500/20 transition-colors border border-gray-500/20 disabled:opacity-50">
                            <XCircle className="w-4 h-4" />
                            <span>Cancel</span>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex gap-4">
                        {project.image ? (
                          <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden bg-slate-700/50">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-gray-500"><svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></div>'; }} />
                          </div>
                        ) : (
                          <div className="flex-shrink-0 w-24 h-24 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center">
                            <FolderKanban className="w-10 h-10 text-purple-400" />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1 min-w-0">
                              <h3 className="text-xl font-bold text-white mb-2 truncate">{project.title}</h3>
                              <div className="flex flex-wrap items-center gap-2 mb-3">
                                {project.category && <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">{project.category}</span>}
                                {project.status && <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.status === "Active" ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-gray-500/10 text-gray-400 border border-gray-500/20"}`}>{project.status}</span>}
                                {project.tech && <span className="text-sm text-gray-400">{project.tech}</span>}
                              </div>
                              {project.description && <p className="text-gray-400 text-sm line-clamp-2">{project.description}</p>}
                            </div>
                            <div className="flex space-x-2 flex-shrink-0">
                              <button onClick={() => handleEdit("project", project)} className="p-2 text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors" title="Edit project">
                                <Edit className="w-5 h-5" />
                              </button>
                              <button onClick={() => handleDelete("project", project._id)} disabled={loading[`delete_${project._id}`]} className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors disabled:opacity-50" title="Delete project">
                                {loading[`delete_${project._id}`] ? <Loader2 className="w-5 h-5 animate-spin" /> : <Trash2 className="w-5 h-5" />}
                              </button>
                            </div>
                          </div>
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
                  <div key={request._id} className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-bold text-white">{request.title}</h3>
                          <span className="px-3 py-1 bg-yellow-500/10 text-yellow-400 text-xs font-medium rounded-full border border-yellow-500/20">Pending</span>
                        </div>
                        <p className="text-sm text-gray-400 mb-2">Requested by: {request.name}</p>
                        <p className="text-gray-300">{request.description}</p>
                      </div>
                    </div>
                    <div className="flex space-x-3 pt-4 border-t border-slate-700">
                      <button onClick={() => handleApprove(request._id)} disabled={loading[`approve_${request._id}`]} className="cursor-pointer flex items-center space-x-2 px-4 py-2 bg-green-500/10 text-green-400 rounded-lg hover:bg-green-500/20 transition-colors border border-green-500/20 disabled:opacity-50">
                        {loading[`approve_${request._id}`] ? <><Loader2 className="w-4 h-4 animate-spin" /><span>Approving...</span></> : <><Check className="w-4 h-4" /><span>Approve</span></>}
                      </button>
                      <button
                        onClick={() => handleReject(request)}
                        disabled={loading[`reject_${request._id}`]}
                        className="cursor-pointer flex items-center space-x-2 px-4 py-2 bg-red-500/10 text-red-400 rounded-lg hover:bg-red-500/20 transition-colors border border-red-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {loading[`reject_${request._id}`] ? (
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

      {/* Universal Modal */}
      {showModal.type && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 border border-purple-500/20 rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Add {showModal.type === "member" ? "Team Member" : "New Project"}</h2>
              <button onClick={() => setShowModal({ type: null, form: {} })} className="p-2 hover:bg-slate-700 rounded-lg transition-colors">
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            <form onSubmit={(e) => handleAdd(e, showModal.type)} className="space-y-4">
              {showModal.type === "member" ? (
                <>
                  <input type="text" value={showModal.form.name || ""} onChange={(e) => setShowModal({ ...showModal, form: { ...showModal.form, name: e.target.value } })} className="w-full bg-slate-900/50 border border-purple-500/20 rounded-lg px-4 py-2 text-white" placeholder="Name" required />
                  <input type="text" value={showModal.form.designation || ""} onChange={(e) => setShowModal({ ...showModal, form: { ...showModal.form, designation: e.target.value } })} className="w-full bg-slate-900/50 border border-purple-500/20 rounded-lg px-4 py-2 text-white" placeholder="Designation" required />
                </>
              ) : (
                <>
                  <input type="text" value={showModal.form.title || ""} onChange={(e) => setShowModal({ ...showModal, form: { ...showModal.form, title: e.target.value } })} className="w-full bg-slate-900/50 border border-purple-500/20 rounded-lg px-4 py-2 text-white" placeholder="Project Title" required />
                  <textarea value={showModal.form.description || ""} onChange={(e) => setShowModal({ ...showModal, form: { ...showModal.form, description: e.target.value } })} rows="4" className="w-full bg-slate-900/50 border border-purple-500/20 rounded-lg px-4 py-2 text-white resize-none" placeholder="Description" required />
                  <input type="text" value={showModal.form.category || ""} onChange={(e) => setShowModal({ ...showModal, form: { ...showModal.form, category: e.target.value } })} className="w-full bg-slate-900/50 border border-purple-500/20 rounded-lg px-4 py-2 text-white" placeholder="Category" required />
                  <input type="url" value={showModal.form.image || ""} onChange={(e) => setShowModal({ ...showModal, form: { ...showModal.form, image: e.target.value } })} className="w-full bg-slate-900/50 border border-purple-500/20 rounded-lg px-4 py-2 text-white" placeholder="Image URL (Optional)" />
                </>
              )}

              <div className="flex space-x-3 pt-4">
                <button type="submit" disabled={loading[`add_${showModal.type}`]} className="flex-1 flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg disabled:opacity-50">
                  {loading[`add_${showModal.type}`] ? <><Loader2 className="w-5 h-5 animate-spin" /><span>Adding...</span></> : <><Plus className="w-5 h-5" /><span>Add {showModal.type === "member" ? "Member" : "Project"}</span></>}
                </button>
                <button type="button" onClick={() => setShowModal({ type: null, form: {} })} disabled={loading[`add_${showModal.type}`]} className="px-6 py-3 bg-slate-700 text-gray-300 rounded-lg hover:bg-slate-600 transition-colors disabled:opacity-50">
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