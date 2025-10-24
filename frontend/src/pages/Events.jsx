// src/pages/Events.jsx
import React, { useEffect, useState } from "react";

export default function EventsTimeline() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("https://api.sdsclub.pp.ua/getEvents"); // or http://localhost:5000/getEvents for local
        const data = await res.json();
        if (data.status === "success") setEvents(data.data || []);
      } catch (err) {
        console.error("Failed to fetch events:", err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-12 drop-shadow-lg">Talks and Sessions</h1>

        {loading ? (
          <div className="text-center text-gray-300">Loading events...</div>
        ) : events.length === 0 ? (
          <div className="text-center text-gray-400">No events yet.</div>
        ) : (
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-white/70 to-white/20 rounded-full h-full"></div>

            {events.map((item, i) => (
              <div key={item._id || i} className={`relative flex flex-col md:flex-row items-center mb-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-white border-4 border-indigo-500 rounded-full z-10 transition-transform hover:scale-125"></div>

                <div className={`bg-white text-gray-800 rounded-xl shadow-lg p-6 w-full md:w-5/12 ${i % 2 === 0 ? "md:mr-auto md:text-right" : "md:ml-auto"}`}>
                  <div className="inline-block px-3 py-1 text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-3">
                    {item.tag}
                  </div>
                  {item.date && <div className="text-sm text-gray-500 font-medium mb-1">{item.date}</div>}
                  <div className="text-lg font-semibold">{item.title}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
