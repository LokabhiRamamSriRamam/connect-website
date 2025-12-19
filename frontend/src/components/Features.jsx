import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

// --- CONFIGURATION ---
const AI_MODELS = [
  {
    name: "Sherlock.AI",
    icon: "/sherlock.svg",
    color: "text-blue-500",
    btnBg: "#3b82f6", // Blue
    title: "Insight & Analytics",
    description:
      "Your data detective. Sherlock analyzes business performance, identifies bottlenecks, and predicts future trends to inform your strategy.",
    features: [
      "Predictive Sales Forecasting",
      "Real-time Expense Tracking",
      "Customer Behavior Analysis",
      "Market Trend Identification",
    ],
  },
  {
    name: "Picasso.AI",
    icon: "/picasso.svg",
    color: "text-pink-500",
    btnBg: "#ec4899", // Pink
    title: "Creative & Content Generation",
    description:
      "Your marketing powerhouse. Picasso automates content creation, designs engaging visuals, and personalizes customer communications.",
    features: [
      "AI-driven Social Media Posts",
      "Automated Email Campaigns",
      "Visual Design Generation",
      "Personalized Offer Creation",
    ],
  },
  {
    name: "Stark.AI",
    icon: "/stark.svg",
    color: "text-purple-500",
    btnBg: "#a855f7", // Purple
    title: "Automation & Operation",
    description:
      "Your efficiency expert. Stark handles the day-to-day grunt work, managing appointments, inventory, and staff scheduling flawlessly.",
    features: [
      "24/7 Booking Management",
      "Automated Staff Scheduling",
      "Inventory & Stock Alerts",
      "Seamless Billing & Invoicing",
    ],
  },
];

const AI_POSITIONS = [
  { top: "30%", x: "-15rem", y: "-7rem" },
  { top: "50%", x: "-12rem", y: "-8rem" },
  { top: "70%", x: "-15rem", y: "-9rem" },
];

const Features = ({ showMobileNav }) => {
  const [activeTab, setActiveTab] = useState(AI_MODELS[0].name);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }
      );
    }
  }, [activeTab]);

  const activeModel =
    AI_MODELS.find((model) => model.name === activeTab) || AI_MODELS[0];

  return (
    <>
      <style>{`
        .smooth-font { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
        .features-bg { position: relative; }
        .features-bg::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, rgba(255, 255, 255, 1), rgba(224, 242, 255, 1));
          background-size: 300% 300%;
          animation: featuresGradientDrift 5s ease-in-out infinite;
          z-index: -1;
        }
        @keyframes featuresGradientDrift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        /* Rotation Logic */
        @keyframes spinClockwise { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spinAntiClockwise { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }

        .animate-clockwise { animation: spinClockwise 10s linear infinite; }
        .animate-anticlockwise { animation: spinAntiClockwise 10s linear infinite; }
        
     .semicircle-strips-wrapper {
    position: absolute;
    top: 50%;
    /* Pin the center of the circle to the left edge */
    left: 0; 
    /* This ensures the exact center of the 500px circle sits on the 0 line */
    transform: translate(-55%, -50%); 
    width: 500px;
    height: 500px;
    pointer-events: none;
    z-index: 1;
    filter: saturate(1.15) brightness(1.05);
}
        .rotating-ring {
            position: absolute;
            inset: 0;
            border-radius: 50%;
        }

        /* Your Original 6 Rings */
        .ring-1 { background: conic-gradient(from 0deg, rgba(164, 42, 53, 0), rgba(164, 42, 53, 0.8), rgba(164, 42, 53, 0)); mask: radial-gradient(circle, transparent 60%, black 60% 66%, transparent 66%); -webkit-mask: radial-gradient(circle, transparent 60%, black 60% 66%, transparent 66%); }
        .ring-2 { background: conic-gradient(from 60deg, rgba(255, 191, 0, 0), rgba(255, 191, 0, 0.5), rgba(255, 191, 0, 0)); mask: radial-gradient(circle, transparent 52%, black 52% 58%, transparent 58%); -webkit-mask: radial-gradient(circle, transparent 52%, black 52% 58%, transparent 58%); animation-delay: -5s; }
        .ring-3 { background: conic-gradient(from 120deg, rgba(0, 78, 152, 0), rgba(0, 78, 152, 0.7), rgba(0, 78, 152, 0)); mask: radial-gradient(circle, transparent 44%, black 44% 50%, transparent 50%); -webkit-mask: radial-gradient(circle, transparent 44%, black 44% 50%, transparent 50%); }
        .ring-4 { background: conic-gradient(from 180deg, rgba(98, 51, 149, 0), rgba(98, 51, 149, 0.75), rgba(98, 51, 149, 0)); mask: radial-gradient(circle, transparent 36%, black 36% 42%, transparent 42%); -webkit-mask: radial-gradient(circle, transparent 36%, black 36% 42%, transparent 42%); animation-delay: -10s; }
        .ring-5 { background: conic-gradient(from 240deg, rgba(0, 128, 128, 0), rgba(0, 128, 128, 0.6), rgba(0, 128, 128, 0)); mask: radial-gradient(circle, transparent 28%, black 28% 34%, transparent 34%); -webkit-mask: radial-gradient(circle, transparent 28%, black 28% 34%, transparent 34%); }
        .ring-6 { background: conic-gradient(from 300deg, rgba(10, 20, 40, 0), rgba(10, 20, 40, 0.85), rgba(10, 20, 40, 0)); mask: radial-gradient(circle, transparent 20%, black 20% 26%, transparent 26%); -webkit-mask: radial-gradient(circle, transparent 20%, black 20% 26%, transparent 26%); animation-delay: -15s; }

        .feature-item-bg { background: rgba(255, 255, 255, 0.7); border: 1px solid rgba(255, 255, 255, 0.6); box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05); }
        .svg-icon-style { width: 1.25rem; height: 1.25rem; }
      `}</style>

      <div className="features-bg relative w-full py-12 px-4 sm:px-6 lg:px-8 font-display smooth-font overflow-hidden min-h-screen">
        {/* BACKGROUND RINGS */}
        <div className="hidden lg:block absolute inset-y-0 left-0 w-[500px] z-0 pointer-events-none">
          <div className="semicircle-strips-wrapper">
            <div className="rotating-ring ring-1 animate-clockwise"></div>
            <div className="rotating-ring ring-2 animate-anticlockwise"></div>
            <div className="rotating-ring ring-3 animate-clockwise"></div>
            <div className="rotating-ring ring-4 animate-anticlockwise"></div>
            <div className="rotating-ring ring-5 animate-clockwise"></div>
            <div className="rotating-ring ring-6 animate-anticlockwise"></div>
          </div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Introducing Our Core AI Models
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Three specialized intelligences working together to run your
              business.
            </p>
          </div>

          {/* MAIN WRAPPER - Grid Layout for Desktop */}
          <div className="relative min-h-[600px] flex flex-col lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            {/* DESKTOP NAV - Occupies 4 columns on the left */}
            <div className="hidden lg:block lg:col-span-4 relative h-full min-h-[500px]">
              {AI_MODELS.map((model, index) => {
                const pos = AI_POSITIONS[index];
                const isActive = activeTab === model.name;
                return (
                  <button
                    key={model.name}
                    onClick={() => setActiveTab(model.name)}
                    // We use absolute positioning within this specific grid column
                    style={{
                      top: pos.top,
                      left: "50%",
                      transform: `translate(${pos.x}, ${pos.y})`,
                    }}
                    className={`absolute flex items-center space-x-2 py-2 px-4 transition-all duration-300 font-semibold text-sm rounded-full w-max backdrop-blur-md z-30 ${
                      isActive
                        ? `${model.color} bg-white/40 shadow-xl border border-white/60 scale-110`
                        : "text-gray-700 hover:bg-white/30"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center bg-white border-2 ${
                        isActive
                          ? "border-gray-300 shadow-inner"
                          : "border-gray-200"
                      }`}
                    >
                      <img src={model.icon} alt="" className="svg-icon-style" />
                    </div>
                    <span className="text-lg">{model.name}</span>
                  </button>
                );
              })}
            </div>

            {/* CONTENT CARD - Occupies 8 columns on the right */}
            <div
              ref={contentRef}
              className="
      w-full max-w-3xl mx-auto p-6 rounded-[2rem] shadow-2xl z-10
      lg:col-span-8 lg:max-w-none lg:mx-0
    "
              style={{
                background: "rgba(255, 255, 255, 0.25)",
                backdropFilter: "blur(25px)",
                WebkitBackdropFilter: "blur(25px)",
                border: "1px solid rgba(255, 255, 255, 0.4)",
              }}
            >
              <h3
                className={`text-4xl font-extrabold mb-4 flex items-center ${activeModel.color}`}
              >
                {activeModel.title}
              </h3>
              <p className="text-xl text-gray-700 mb-8 max-w-xl">
                {activeModel.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activeModel.features.map((feature, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-xl feature-item-bg transition-shadow duration-300 hover:shadow-lg"
                  >
                    <div className={`text-3xl mb-2 ${activeModel.color}`}>
                      <span className="material-symbols-outlined">
                        {index === 0
                          ? "query_stats"
                          : index === 1
                          ? "autorenew"
                          : index === 2
                          ? "person_pin"
                          : "request_quote"}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                      {feature}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {activeModel.name} ensures this area is optimized.
                    </p>
                  </div>
                ))}
              </div>

              {/* ACTION BUTTON */}
              <div className="mt-10 pt-6 border-t border-gray-200">
                <button
                  className="px-8 py-3 text-white font-bold rounded-lg shadow-lg transition-transform hover:scale-[1.02] uppercase tracking-wider"
                  style={{ backgroundColor: activeModel.btnBg }}
                >
                  Launch {activeModel.name}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE NAVIGATION DOCK */}
        {showMobileNav && (
          <div className="lg:hidden fixed bottom-6 left-0 w-full z-50 px-4">
            <div className="flex justify-around items-center bg-white/40 backdrop-blur-xl border border-white/40 p-2 rounded-3xl shadow-2xl">
              {AI_MODELS.map((model) => (
                <button
                  key={model.name}
                  onClick={() => setActiveTab(model.name)}
                  className={`flex flex-col items-center p-3 rounded-2xl transition-all ${
                    activeTab === model.name
                      ? "bg-white shadow-md scale-110"
                      : "opacity-50"
                  }`}
                >
                  <img src={model.icon} alt="" className="w-6 h-6 mb-1" />
                  <span
                    className={`text-[10px] font-bold ${
                      activeTab === model.name
                        ? "text-gray-900"
                        : "text-gray-500"
                    }`}
                  >
                    {model.name.split(".")[0]}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Features;
