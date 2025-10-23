import { useState } from "react";

export default function RequestProject() {
  const [form, setForm] = useState({ name: "", email: "", title: "", description: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://your-api-url.vercel.app/requestProject", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const result = await response.json();
    setMessage(result.message);

    if (result.status === "success") {
      setForm({ name: "", email: "", title: "", description: "" });
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-blue-700 text-center mb-10">
        Request a Project
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          name="title"
          type="text"
          placeholder="Project Title"
          value={form.title}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          name="description"
          placeholder="Project Description"
          rows="5"
          value={form.description}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>
        <button
                            type="submit"
                            className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                        >
          Submit Request
        </button>
      </form>

      {message && (
        <p className="text-center text-white mt-6 font-medium">{message}</p>
      )}
    </div>
  );
}
