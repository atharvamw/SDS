export default function RequestProject() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-blue-700 text-center mb-10">Request a Project</h2>
      <form className="space-y-6">
        <input type="text" placeholder="Your Name" className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500" />
        <input type="email" placeholder="Your Email" className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500" />
        <input type="text" placeholder="Project Title" className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500" />
        <textarea placeholder="Project Description" rows="5" className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"></textarea>
        <button type="submit" className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800">
          Submit Request
        </button>
      </form>
    </div>
  );
}
