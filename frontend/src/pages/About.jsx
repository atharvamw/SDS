export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center mb-8 text-blue-700">About Us</h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-8 text-center max-w-3xl mx-auto">
        The <b>Software Development Section (SDS)</b> is a vibrant technical club at COEP Pune
        that focuses on building impactful software solutions, fostering teamwork, and
        developing real-world problem-solving skills among students.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <div className="bg-white p-6 shadow-lg rounded-2xl hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold mb-3 text-blue-600">Our Vision</h3>
          <p className="text-gray-600">
            To nurture a collaborative environment that empowers students to become innovative
            software engineers who solve real-world problems.
          </p>
        </div>

        <div className="bg-white p-6 shadow-lg rounded-2xl hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold mb-3 text-blue-600">Our Mission</h3>
          <p className="text-gray-600">
            To promote knowledge sharing, mentorship, and exposure to cutting-edge
            technologies through impactful projects and events.
          </p>
        </div>

        <div className="bg-white p-6 shadow-lg rounded-2xl hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold mb-3 text-blue-600">What We Do</h3>
          <p className="text-gray-600">
            We organize hackathons, seminars, and real-world software projects that
            strengthen both technical and soft skills of our members.
          </p>
        </div>
      </div>
    </div>
  );
}
