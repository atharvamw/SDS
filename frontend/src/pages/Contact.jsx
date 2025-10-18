export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-center">
      <h2 className="text-4xl font-bold text-blue-700 mb-8">Contact Us</h2>
      <p className="text-gray-600 mb-10">
        Have questions or want to collaborate with SDS? Reach out to us!
      </p>

      <form className="space-y-6">
        <input type="text" placeholder="Full Name" className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500" />
        <input type="email" placeholder="Email Address" className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500" />
        <textarea placeholder="Your Message" rows="5" className="w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"></textarea>
        <button type="submit" className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800">
          Send Message
        </button>
      </form>
    </div>
  );
}
