import { useState } from "react";
import { FilePlus } from "lucide-react";
import Bg from "../components/Background";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RequestProject() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    title: "",
    description: "",
  });
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // To track success/error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading"); // Optional: for loading spinner
    setMessage("");

    try {
      const response = await fetch(
        "https://your-api-url.vercel.app/requestProject",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      const result = await response.json();
      setMessage(result.message);
      setStatus(result.status); // Assuming API returns "success" or "error"

      if (result.status === "success") {
        setForm({ name: "", email: "", title: "", description: "" });
      }
    } catch (error) {
      setMessage("An error occurred. Please try again.");
      setStatus("error");
    }
  };

  return (
    <>
      <Navbar />
      <Bg>
        {/* Main wrapper div from About.jsx */}
        <div className="pt-20 sm:pt-24 pb-8 sm:pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header (Styled like About.jsx) */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
                <FilePlus className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-300"> {/* Removed font */}
                  Submit an Idea
                </span>
              </div>
              <h1
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                <span className="bg-gradient-to-r from-purple-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  REQUEST A PROJECT
                </span>
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"> {/* Removed style, matched Home.jsx */}
                Have an idea for a project that SDS can build for the college?
                Let us know!
              </p>
            </div>

            {/* Themed Form Card */}
            <div className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-slate-900/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all" /* Removed font */
                  required
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-slate-900/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all" /* Removed font */
                  required
                />
                <input
                  name="title"
                  type="text"
                  placeholder="Project Title"
                  value={form.title}
                  onChange={handleChange}
                  className="w-full bg-slate-900/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all" /* Removed font */
                  required
                />
                <textarea
                  name="description"
                  placeholder="Project Description"
                  rows="5"
                  value={form.description}
                  onChange={handleChange}
                  className="w-full bg-slate-900/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all resize-none" /* Removed font */
                  required
                ></textarea>

                {/* Themed Submit Button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 via-teal-500 to-cyan-500 hover:from-purple-600 hover:via-teal-600 hover:to-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                  style={{ fontFamily: "Orbitron, sans-serif" }}
                  disabled={status === "loading"} // Disable button while submitting
                >
                  {status === "loading" ? "Submitting..." : "Submit Request"}
                </button>
              </form>

              {/* Themed Status Message */}
              {message && (
                <p
                  className={`text-center mt-6 font-medium ${ /* Removed font */
                    status === "success" ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {message}
                </p>
              )}
            </div>
          </div>

        </div>
      </Bg>
    </>
  );
}