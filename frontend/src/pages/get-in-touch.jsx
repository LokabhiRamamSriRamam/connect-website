import React, { useState } from "react";

const GetInTouch = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "", // Added to match Schema
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/leads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          source: "website_contact_form", // Custom source tagging
        }),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error || "Something went wrong");

      setStatus({ type: "success", message: "Thankyou for Contacting Us! We'll reach out soon." });
      // Reset form
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus({ type: "error", message: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-yellow-400 min-h-screen py-20 px-6 text-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-4">
          LET’S TALK <br /> BUSINESS
        </h1>
        <p className="text-lg font-medium opacity-80 mb-16">
          Tell us about your goals — we’ll handle the rest.
        </p>

        <div className="bg-white rounded-3xl p-10 shadow-2xl text-left">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Status Messages */}
            {status.message && (
              <div className={`p-4 rounded-xl font-bold text-sm ${
                status.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
              }`}>
                {status.message}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-black uppercase tracking-widest mb-2">Name</label>
                <input
                  name="name"
                  value={form.name}
                  required
                  onChange={handleChange}
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400"
                  placeholder="Mr. Mukesh Ambani"
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-widest mb-2">Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  required
                  onChange={handleChange}
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400"
                  placeholder="mambani@reliance.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-black uppercase tracking-widest mb-2">Phone / WhatsApp</label>
              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400"
                placeholder="+91 99673 92920"
              />
            </div>

            <div>
              <label className="block text-xs font-black uppercase tracking-widest mb-2">Message</label>
              <textarea
                name="message"
                value={form.message}
                rows="4"
                onChange={handleChange}
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-yellow-400"
                placeholder="Tell us about your business needs..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-yellow-400 py-4 rounded-xl font-black text-sm uppercase shadow-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex justify-center items-center"
            >
              {loading ? (
                <span className="material-symbols-outlined animate-spin">sync</span>
              ) : (
                "Get in Touch"
              )}
            </button>
          </form>

          <p className="text-xs text-center text-gray-500 font-bold mt-6">
            We usually respond within 24 hours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;