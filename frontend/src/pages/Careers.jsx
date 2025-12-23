import React, { useState } from "react";

const Careers = () => {
  const [selectedRole, setSelectedRole] = useState(null);

  const roles = [
    {
      title: "Frontend Engineer",
      location: "Remote / India",
      type: "Full-time",
      shortDesc: "Build delightful, high-performance interfaces with React & Tailwind.",
      detailedDesc: "As a Frontend Engineer at Connect-GEN AI, you will work on building highly interactive, performant, and scalable web applications. Collaborate with designers and backend engineers to deliver seamless user experiences. Tech stack: React, TailwindCSS, Vite, Node.js."
    },
    {
      title: "AI / ML Engineer",
      location: "Remote / India",
      type: "Full-time",
      shortDesc: "Design, train and deploy intelligent systems that power our AI products.",
      detailedDesc: "As an AI/ML Engineer, you will design, implement, and optimize AI models to power our products. Work with large datasets, experiment with advanced algorithms, and deploy ML systems to production. Strong Python, PyTorch/TensorFlow, and data engineering skills required."
    },
    {
      title: "Product Designer",
      location: "Remote",
      type: "Contract",
      shortDesc: "Shape intuitive experiences across our platform with a strong design system mindset.",
      detailedDesc: "We are looking for a Product Designer to define and create beautiful, user-friendly interfaces. You will design flows, wireframes, and visual assets while maintaining consistency with our design system. Experience with Figma or Sketch is essential."
    },
    {
      title: "Sales Executive",
      location: "Remote / India",
      type: "Full-time",
      shortDesc: "Drive sales and grow our AI platform client base.",
      detailedDesc: "As a Sales Executive, you will identify leads, conduct demos, and close deals with SMBs and enterprise clients. You will also help improve our sales strategy and marketing outreach. Strong communication and negotiation skills required."
    },
    {
      title: "Account Manager",
      location: "Remote / India",
      type: "Full-time",
      shortDesc: "Manage client relationships and ensure successful product adoption.",
      detailedDesc: "The Account Manager will be responsible for onboarding clients, maintaining relationships, and ensuring they are getting maximum value from our platform. Experience in SaaS account management preferred."
    },
    {
      title: "Sales Development Representative",
      location: "Remote",
      type: "Full-time",
      shortDesc: "Prospect and qualify leads for the sales team.",
      detailedDesc: "As an SDR, you will reach out to potential clients, qualify leads, schedule meetings, and assist the sales team. Excellent communication skills and a results-driven mindset are key."
    }
  ];

  return (
    <div className="bg-yellow-400 min-h-screen py-20 px-6 text-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-4">
            COME BUILD THE <br /> FUTURE WITH US
          </h1>
          <p className="text-lg font-medium opacity-80">
            We’re a team of builders, thinkers, and problem-solvers.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roles.map((role, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 shadow-2xl hover:scale-105 transition-transform cursor-pointer"
              onClick={() => setSelectedRole(role)}
            >
              <h3 className="text-xl font-black mb-2">{role.title}</h3>
              <p className="text-sm font-bold text-gray-500 mb-1">{role.location}</p>
              <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">{role.type}</p>
              <p className="text-sm text-gray-600 mb-8">{role.shortDesc}</p>
              <button
                className="w-full bg-yellow-400 py-3 rounded-xl font-black text-sm uppercase shadow-md hover:opacity-90"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open("https://www.linkedin.com/company/connect-gen-ai/", "_blank");
                }}
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>

        {/* Culture Section */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-black mb-4 italic">WHY CONNECT-GEN AI?</h2>
          <p className="max-w-3xl mx-auto text-sm font-medium opacity-80">
            We value ownership, curiosity, speed, and impact. If you love solving
            hard problems and shipping meaningful work — you’ll fit right in.
          </p>
        </div>
      </div>

      {/* Role Modal */}
      {selectedRole && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-8 max-w-xl w-full relative shadow-2xl">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 font-bold"
              onClick={() => setSelectedRole(null)}
            >
              ✕
            </button>
            <h3 className="text-2xl font-black mb-4">{selectedRole.title}</h3>
            <p className="text-sm font-bold text-gray-500 mb-2">{selectedRole.location}</p>
            <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">{selectedRole.type}</p>
            <p className="text-sm text-gray-700 mb-6">{selectedRole.detailedDesc}</p>
            <button
              className="w-full bg-yellow-400 py-3 rounded-xl font-black text-sm uppercase shadow-md hover:opacity-90"
              onClick={() => window.open("https://www.linkedin.com/company/connect-gen-ai/", "_blank")}
            >
              Apply Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Careers;
