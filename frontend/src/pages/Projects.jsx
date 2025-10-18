import React from "react";
import projects from "../data/projects.json";

export default function Projects() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">
          Our Projects
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Projects at SDS aim to solve real-world problems faced by the college,
          covering domains from database management to web & mobile apps.
        </p>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-blue-700 mb-2">
                  {p.title}
                </h3>
                <p className="text-gray-600">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <p className="text-gray-600">
            Have a project idea?{" "}
            <a
              href="/request-project"
              className="text-blue-600 hover:underline font-medium"
            >
              Request one here!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
