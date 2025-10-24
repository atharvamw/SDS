import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
            <Mail className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">Get In Touch</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have questions or want to collaborate with SDS? We'd love to hear
            from you!
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Send us a Message
          </h2>
          <form
            className="space-y-6"
            onSubmit={async (e) => {
              e.preventDefault();
              const formData = {
                name: e.target.name.value,
                email: e.target.email.value,
                message: e.target.message.value,
              };

              const res = await fetch("http://localhost:5000/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
              });

              const data = await res.json();
              alert(data.message);
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full bg-slate-900/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full bg-slate-900/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              className="w-full bg-slate-900/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg px-6 py-3 hover:from-purple-600 hover:to-pink-600 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
